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
    }
})();