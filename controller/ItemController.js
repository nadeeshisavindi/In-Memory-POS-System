
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

// CLICK
$('#item_tbody').on('click','tr',function(){
    let i = getItemByIndex($(this).data('index'));

    $('#item_id').val(i.id);
    $('#item_name').val(i.name);
    $('#item_price').val(i.price);
    $('#item_qty').val(i.qty);
});



