
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

//click
$('#item_tbody').on('click','tr',function(){
    let i = getItemByIndex($(this).data('index'));

    $('#item_id').val(i.id);
    $('#item_name').val(i.name);
    $('#item_price').val(i.price);
    $('#item_qty').val(i.qty);
});

// save
$('#item_save_btn').on('click',()=>{
    addItem(
        $('#item_id').val(),
        $('#item_name').val(),
        $('#item_price').val(),
        $('#item_qty').val()
    );
    loadItemTbl();
});

// update
$('#item_update_btn').on('click',()=>{
    updateItem(
        $('#item_id').val(),
        $('#item_name').val(),
        $('#item_price').val(),
        $('#item_qty').val()
    );
    loadItemTbl();
});

//dlete
$('#item_delete_btn').on('click',()=>{
    deleteItem($('#item_id').val());
    loadItemTbl();
});


// reset
$('#item_reset_btn').on('click', () => {
    clearForm();
});

function clearForm() {
    $('#item_id').val("");
    $('#item_name').val("");
    $('#item_price').val("");
    $('#item_qty').val("");
}


loadItemTbl();


