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

        UserService.getData('assets/friends/friends.json').then(
            function(resolve){
                //success
                vm.friendList = resolve.friendList;
                console.log("loaded friendList");
            },
            function(reject){
                //failure
                console.log("Failed to load friendList :(");
            }
        );



        vm.animateState = function(id, cssID, newClass, timeout) {
            UserService.animateState(id, cssID, newClass, timeout);
        };
    }
})();