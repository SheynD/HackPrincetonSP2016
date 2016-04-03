/**
 * Created by cody on 4/2/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('Watched', ['UserService', Watched]);

    Watched.$inject =  ['UserService'];

    function Watched(UserService) {

        var vm = this;

        console.log("Controller Loaded [watched.js]");

        vm.animateState = function(id, cssID, newClass, timeout) {
            UserService.animateState(id, cssID, newClass, timeout);
        };
    }
})();