/**
 * Created by cody on 4/2/16.
 */
(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('FilmSearch', ['UserService', FilmSearch]);

    FilmSearch.$inject =  ['UserService'];

    function FilmSearch(UserService) {

        var vm = this;

        console.log("Controller Loaded [filmSearch.js]");


        vm.animateState = function(id, cssID, newClass, timeout) {
            UserService.animateState(id, cssID, newClass, timeout);
        };
    }
})();