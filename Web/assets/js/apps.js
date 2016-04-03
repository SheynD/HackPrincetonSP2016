(function () {
    'use strict';

angular
    .module('myApp', [
        'ngMaterial',
        'ngMessages',
        'routerApp',
        'ngTable',
        'ngAnimate',
        'infinite-scroll',
        'ngTable'
    ])

    .config(configureApp);

    function configureApp($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('red');
    }
})();
