//
//     $('#login_btn').on('click', function () {
//
//     let user = $('#username').val();
//     let pass = $('#password').val();
//
//     if(user === "admin" && pass === "1234"){
//     Swal.fire({
//     icon: "success",
//     title: "Login Success"
// }).then(()=>{
//     window.location.href = "index.html"; // go to POS
// });
// } else {
//     Swal.fire({
//     icon: "error",
//     title: "Invalid Username or Password"
// });
// }
// });
//

$('#login_btn').on('click', function () {

    let username = $('#username').val();
    let password = $('#password').val();

    // simple check (example)
    if (username === "admin" && password === "1234") {

        // store login state
        localStorage.setItem("loggedIn", "true");

        // redirect to dashboard page
        window.location.href = "index.html";

    } else {
        Swal.fire("Error", "Invalid login", "error");
    }
});
