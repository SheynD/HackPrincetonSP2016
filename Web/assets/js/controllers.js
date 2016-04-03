(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('AppCtrl', [AppCtrl]);

    function AppCtrl() {

        var vm = this;

        console.log("Main Controller Loaded [controllers.js]");

        window.fbAsyncInit = function() {
        FB.init({
            appId   : 605514359613442,
            xfbml   : true,
            version : 'v2.5'
        });
    };

    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if(d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    }

    
})
();




