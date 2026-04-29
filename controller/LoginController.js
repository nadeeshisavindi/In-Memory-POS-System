// ------------------------ Login --------------------------
$('#login_btn').on('click', function () {

    let username = $('#username').val();
    let password = $('#password').val();

    if(username === "admin" && password === "1234") {

        Swal.fire({
            icon: "success",
            title: "Login Successful!"
        });

        $('#login_section').hide();
        $('#main_section').show();

    } else {
        Swal.fire({
            icon: "error",
            title: "Invalid Username or Password!"
        });
    }
});