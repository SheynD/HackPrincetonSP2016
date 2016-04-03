/**
 * Created by cody on 4/2/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('Friends', ['UserService', Friends]);

    Friends.$inject =  ['UserService'];

    function Friends(UserService) {

        var vm = this;

        console.log("Controller Loaded [friends.js]");

        vm.animateState = function(id, cssID, newClass, timeout) {
            UserService.animateState(id, cssID, newClass, timeout);
        };
    }
})();