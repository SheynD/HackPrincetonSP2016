(function () {
    'use strict';

angular
    .module('myApp')
    .directive('topDataEntry', function () {
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            templateUrl: 'assets/topHeaderToolbar/topHeaderToolbar.html',
            controller: 'MainMenu',
            controllerAs: 'mainMenu'
        };
    });

})();
