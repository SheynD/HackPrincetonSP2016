/**
 * Created by cody on 4/2/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('Login', ['UserService', Login]);

    Login.$inject =  ['UserService'];

    function Login(UserService) {

        var vm = this;

        console.log("Controller Loaded [login.js]");


        vm.animateState = function(id, cssID, newClass, timeout) {
            UserService.animateState(id, cssID, newClass, timeout);
        };

        vm.FBLogin = function() {
            FB.login(function(response) {
                if(response.authResponse) {
                    console.log('Welcome! Fetching your information....');
                    FB.api('/me', function(response) {
                        console.log('Good to see you, ' + response.name + '.');
                        console.log(response);

                        var accessToken = FB.getAuthResponse();
                        console.log(accessToken);
                    });
                }
                else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
        };
    }
})();