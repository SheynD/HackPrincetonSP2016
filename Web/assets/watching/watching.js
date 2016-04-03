/**
 * Created by cody on 4/2/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('Wishlist', ['UserService', Wishlist]);

    Wishlist.$inject =  ['UserService'];

    function Wishlist(UserService) {

        var vm = this;

        console.log("Controller Loaded [wishlist.js]");

        vm.animateState = function(id, cssID, newClass, timeout) {
            UserService.animateState(id, cssID, newClass, timeout);
        };
    }
})();