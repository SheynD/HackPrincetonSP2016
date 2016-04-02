(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('AppCtrl', [AppCtrl]);

    function AppCtrl() {

        var vm = this;

        console.log("Main Controller Loaded [controllers.js]");
    }
})();




