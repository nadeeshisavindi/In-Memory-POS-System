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