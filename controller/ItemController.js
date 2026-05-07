import {
    addItem, updateItem, deleteItem,
    getItems, getItemByIndex
} from '../model/ItemModel.js';

export const loadItemTbl = () => {
    $('#item_tbody').empty();

    getItems().forEach((i, index) => {
        $('#item_tbody').append(`
            <tr data-index="${index}">
                <td>${i.id}</td>
                <td>${i.name}</td>
                <td>${i.price}</td>
                <td>${i.qty}</td>
            </tr>
        `);
    });
};

// ✅ dropdown change → Item ID auto-fill
$('#item_name').on('change', function () {
    const selectedId = $(this).find(':selected').data('id');
    $('#item_id').val(selectedId ? selectedId : '');
});

// row click → form fill
$('#item_tbody').on('click', 'tr', function () {
    let i = getItemByIndex($(this).data('index'));

    $('#item_id').val(i.id);
    $('#item_name').val(i.name);   // dropdown set
    $('#item_price').val(i.price);
    $('#item_qty').val(i.qty);
});

// save
$('#item_save_btn').on('click', () => {
    const id   = $('#item_id').val().trim();
    const name = $('#item_name').val().trim();
    const price = $('#item_price').val();
    const qty   = $('#item_qty').val();

    if (!id || !name || !price || !qty) {
        Swal.fire({ icon: 'warning', title: 'Please fill all fields.' });
        return;
    }

    addItem(id, name, price, qty);
    loadItemTbl();
    clearForm();
    Swal.fire({ icon: 'success', title: 'Item saved!', timer: 1200, showConfirmButton: false });
});

// update
$('#item_update_btn').on('click', () => {
    const id = $('#item_id').val().trim();
    if (!id) { Swal.fire({ icon: 'error', title: 'Select an item first!' }); return; }

    updateItem(id, $('#item_name').val(), $('#item_price').val(), $('#item_qty').val());
    loadItemTbl();
    clearForm();
    Swal.fire({ icon: 'success', title: 'Item updated!', timer: 1200, showConfirmButton: false });
});

// delete
$('#item_delete_btn').on('click', () => {
    const id = $('#item_id').val().trim();
    if (!id) { Swal.fire({ icon: 'error', title: 'Select an item first!' }); return; }

    Swal.fire({
        title: 'Delete item?', icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e63946',
        confirmButtonText: 'Delete'
    }).then(r => {
        if (r.isConfirmed) {
            deleteItem(id);
            loadItemTbl();
            clearForm();
            Swal.fire({ icon: 'success', title: 'Deleted!', timer: 1200, showConfirmButton: false });
        }
    });
});

// reset
$('#item_reset_btn').on('click', () => {
    clearForm();
});

function clearForm() {
    $('#item_id').val('');
    $('#item_name').val('');    // ✅ dropdown reset
    $('#item_price').val('');
    $('#item_qty').val('');
}

loadItemTbl();