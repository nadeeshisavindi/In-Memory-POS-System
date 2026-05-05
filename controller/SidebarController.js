import { loadCustomerTbl } from './CustomerController.js';
import { loadItemTbl } from './ItemController.js';
import { loadOrderTbl } from './OrderController.js';

$(document).ready(function () {

    // DEFAULT
    $('.content-section').hide();
    $('#dashboard_section').show();

    // ================= CUSTOMER =================
    $('#customer_tab').on('click', function () {

        $('.content-section').hide();
        $('#customer_section').show();

        loadCustomerTbl();   // 🔥 TABLE LOAD HERE
    });

    // ================= ITEM =================
    $('#item_tab').on('click', function () {

        $('.content-section').hide();
        $('#item_section').show();

        loadItemTbl();       // 🔥 TABLE LOAD HERE
    });

    // ================= ORDER =================
    $('#order_tab').on('click', function () {

        $('.content-section').hide();
        $('#order_section').show();

        loadOrderTbl();      // 🔥 TABLE LOAD HERE
    });

    // dashboard
    $('#dashboard_tab').on('click', function () {

        $('.content-section').hide();
        $('#dashboard_section').show();
    });

    //  LOGOUT
    $('#logout_btn').on('click', function () {

        Swal.fire({
            title: "Logout?",
            text: "You will be redirected to login page",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Logout"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "login.html"; // change path if needed
            }
        });

});
});