var user = {
  userName: null,
  loggedIn: false,
  gameId: null
};

$(document).ready(function(e) {
    $.get("/userStatus", {}, function(data, status) {
        console.log(data, status);
        user.userName = data.userName;
        user.loggedIn = data.loggedIn;
        user.gameId = data.gameId;
    });

    $('.btn-primary').on('click', function(e) {
        if(!user.loggedIn) {
            //As an HTTP redirect (back button will not work )
            window.location.replace("/");
        } else {
            console.log('Adding user to game');
            // $.post("/addUserToGame", user, function(data, status) {

            // });
        }
    });

    $('.btn-danger').on('click', function(e) {
        if(!user.loggedIn) {
            //As an HTTP redirect (back button will not work )
            window.location.replace("/");
        } else {
            console.log('Removing user from game');
            // $.post("/removeUserFromGame", user, function(data, status) {

            // });
        }
    });
});