//facebook sdk init
window.fbAsyncInit = function() {
    FB.init({
        appId      : '3099508266843937',
        cookie     : true,
        xfbml      : true,
        version    : 'v8.0'
    });

    FB.AppEvents.logPageView();

};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//login check on button click
        function checkLoginState(){
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    // The user is logged in and has authenticated your
                    // app, and response.authResponse supplies
                    // the user's ID, a valid access token, a signed
                    // request, and the time the access token
                    // and signed request each expire.
                    var uid = response.authResponse.userID;
                    var accessToken = response.authResponse.accessToken;
                    console.log("Successful login");
                    window.alert("Logging you in!");
                    window.location.replace("/GaPS/html/index.html");
                } else if (response.status === 'not_authorized') {
                    // The user hasn't authorized your application.  They
                    // must click the Login button, or you must call FB.login
                    // in response to a user gesture, to launch a login dialog.
                    console.log("Unauthorized");
                } else {
                    // The user isn't logged in to Facebook. You can launch a
                    // login dialog with a user gesture, but the user may have
                    // to log in to Facebook before authorizing your application.
                    console.log("Not logged in");
                }
            });
            FB.login(function(response) {
                console.log(response);
            }, {scope: 'email'});
        }
