myApp.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when("/", {
			templateUrl : 'views/home/login.html',
			controller : 'HomeCtrl'
		})
		.otherwise('/', {
			templateUrl : 'views/home/home.html',
			controller : 'HomeCtrl'
		});
}]);