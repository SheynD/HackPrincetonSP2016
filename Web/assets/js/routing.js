(function () {
    'use strict';

    angular
        .module('routerApp', [
            'ui.router'
        ])
        .config(configureRouterApp);


    function configureRouterApp($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');

        $stateProvider

            .state('mainMenu', {
                url: '/mainMenu',
                templateUrl: 'assets/mainMenu/mainMenu.html',
                controller: 'MainMenu',
                controllerAs: 'mainMenu'
            })

            .state('userProfile', {
                url: '/profile',
                templateUrl: 'assets/profile/profile.html',
                controller: 'Profile',
                controllerAs: 'profile'
            })

            .state('filmSearch', {
                url: '/filmSearch',
                templateUrl: 'assets/filmSearch/filmSearch.html',
                controller: 'FilmSearch',
                controllerAs: 'filmSearch'
            })

            .state('loginPage', {
                url: '/login',
                templateUrl: 'assets/login/login.html',
                controller: 'Login',
                controllerAs: 'login'
            })

            .state('friends', {
                url: '/login',
                templateUrl: 'assets/friends/friends.html',
                controller: 'Friends',
                controllerAs: 'friends'
            })


    }
})();

