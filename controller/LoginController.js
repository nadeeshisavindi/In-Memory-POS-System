
    $('#login_btn').on('click', function () {

    let user = $('#username').val();
    let pass = $('#password').val();

    if(user === "admin" && pass === "1234"){
    Swal.fire({
    icon: "success",
    title: "Login Success"
}).then(()=>{
        window.location.href = "dashboard.html";
});
} else {
    Swal.fire({
    icon: "error",
    title: "Invalid Username or Password"
});
}
});

