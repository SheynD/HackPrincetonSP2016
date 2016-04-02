/**
 * Created by cody on 4/2/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('Profile', ['UserService', Profile]);

    Profile.$inject =  ['UserService'];

    function Profile(UserService) {

        var vm = this;

        console.log("Controller Loaded [profile.js]");


        //vm.animateState = function(id, cssID, newClass, timeout) {
        //    UserService.animateState(id, cssID, newClass, timeout);
        //};
    }
})();


