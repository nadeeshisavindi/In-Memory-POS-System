import {
    addCustomer, updateCustomer, deleteCustomer,
    getCustomers, getCustomerById, getCustomerByIndex
} from '../model/CustomerModel.js';

// LOAD TABLE
export const loadCustomerTbl = () => {
    $('#customer_tbody').empty();

    getCustomers().forEach((c, i) => {
        $('#customer_tbody').append(`
            <tr data-index="${i}">
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td>${c.phone}</td>
                <td>${c.address}</td>
            </tr>
        `);
    });
};

// CLICK ROW
$('#customer_tbody').on('click', 'tr', function () {
    let c = getCustomerByIndex($(this).data('index'));

    $('#customer_id').val(c.id);
    $('#customer_name').val(c.name);
    $('#customer_phone').val(c.phone);
    $('#customer_address').val(c.address);
});

// SAVE
$('#customer_save_btn').on('click', () => {
    addCustomer(
        $('#customer_id').val(),
        $('#customer_name').val(),
        $('#customer_phone').val(),
        $('#customer_address').val()
    );

    loadCustomerTbl();
});

// UPDATE
$('#customer_update_btn').on('click', () => {
    updateCustomer(
        $('#customer_id').val(),
        $('#customer_name').val(),
        $('#customer_phone').val(),
        $('#customer_address').val()
    );

    loadCustomerTbl();
});

// DELETE
$('#customer_delete_btn').on('click', () => {
    deleteCustomer($('#customer_id').val());
    loadCustomerTbl();
});



// RESET
$('#customer_reset_btn').on('click', () => {
    clearForm();
});

function clearForm() {
    $('#customer_id').val("");
    $('#customer_name').val("");
    $('#customer_phone').val("");
    $('#customer_address').val("");
}

// initial load
loadCustomerTbl();