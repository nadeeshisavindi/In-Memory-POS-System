import { loadCustomerTbl } from './CustomerController.js';
import { loadItemTbl } from './ItemController.js';
import { loadOrderTbl } from './OrderController.js';
import { loadDashboard } from './DashboardController.js';
import { initOrderDetails } from './OrderDetailsController.js';



$(document).ready(function () {

    //  MOBILE HAMBURGER
    $('#menu_btn').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    // DEFAULT LOAD
    $('.content-section').hide();
    $('#dashboard_section').show();
    loadDashboard();

    // CUSTOMER
    $('#customer_tab').on('click', function () {
        $('.content-section').hide();
        $('#customer_section').show();
        loadCustomerTbl();
    });

    // ITEM
    $('#item_tab').on('click', function () {
        $('.content-section').hide();
        $('#item_section').show();
        loadItemTbl();
    });

    // ORDER
    $('#order_tab').on('click', function () {
        $('.content-section').hide();
        $('#order_section').show();
        loadOrderTbl();
    });

    // orderdetails
    $('#order_details_tab').on('click', function () {
        $('.content-section').hide();
        $('#order-details').show();   // .removeClass('d-none') වෙනුවට .show()
        initOrderDetails();
    });

    // DASHBOARD
    $('#dashboard_tab').on('click', function () {
        $('.content-section').hide();
        $('#dashboard_section').show();
        loadDashboard();
    });

    // LOGOUT
    $('#logout_btn').on('click', function () {
        Swal.fire({
            title: "Logout?",
            text: "You will be redirected to login page",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Logout"
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = "login.html";
            }
        });
    });

});