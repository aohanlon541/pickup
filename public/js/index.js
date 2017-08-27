var user = {
  userName: null,
  gameId: null
};

$(document).ready(function(e) {

    user.userName = sessionStorage["pickupUserName"];

    $('.btn-primary').on('click', function(e) {
        if(!user.userName) {
            //As an HTTP redirect (back button will not work )
            window.location.replace("/");
        } else {
            if(user.gameId === null) {
                user.gameId = $(this).val();
                $.post("/index/addUserToGame", user, function(data, status) {
                    if(data == 'OK') {
                        $('#'+user.gameId).text(parseInt($('#'+user.gameId).text()) + 1);
                    } else {
                        console.warn(status);
                        user.gameId = null;
                    }
                });
            } else {
                console.warn("Can't add to game");
            }
        }
    });

    $('.btn-danger').on('click', function(e) {
        if(!user.userName) {
            //As an HTTP redirect (back button will not work )
            window.location.replace("/");
        } else {
            if(user.gameId !== null) {
                $.post("/index/removeUserFromGame", user, function(data, status) {
                    if(data == 'OK') {
                        $('#'+user.gameId).text(parseInt($('#'+user.gameId).text()) - 1);
                        user.gameId = null;
                    } else {
                        console.warn(status);
                    }
                });
            } else {
                console.warn("Can't leave game");
            }
        }
    });

});