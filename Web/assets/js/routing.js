(function () {
    'use strict';

    angular
        .module('routerApp', [
            'ui.router'
        ])
        .config(configureRouterApp);


    function configureRouterApp($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/mainMenu');

        $stateProvider

            .state('mainMenu', {
                url: '/mainMenu',
                templateUrl: 'assets/mainMenu/mainMenu.html',
                controller: 'MainMenu',
                controllerAs: 'mainMenu'
            })

    }
})();

