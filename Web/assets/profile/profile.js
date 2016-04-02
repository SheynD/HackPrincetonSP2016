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

        UserService.getData('assets/profile/profile.json').then(
            function(resolve){
                //success
                vm.profile = resolve.profile[0];
                console.log("loaded profile picture");
            },
            function(reject){
                //failure
                console.log("Failed to load tile icons :(");
            }
        );


        //vm.animateState = function(id, cssID, newClass, timeout) {
        //    UserService.animateState(id, cssID, newClass, timeout);
        //};
    }
})();


