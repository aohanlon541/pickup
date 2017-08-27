$(document).ready(function(e) {
    $("#usernameInput").focus();

    function login() {
        var username = $('#usernameInput').val();
        var password = $('#passwordInput').val();
        var login = {
            username: username,
            password: password
        };

        $.post("/login", login).done(function(data) {
            if(data.message) {
                $('#error').text(data.message);
                $('#passwordInput').val("");
            } else {
                sessionStorage.pickupUserName = username;
                window.location.href = '../index';
            }
        });
    };

    $("#login").on("click", function(e) {
        login();
    });

    $(document).keypress(function(e) {
        if(e.which == 13) {
            login();
        }
    });

});