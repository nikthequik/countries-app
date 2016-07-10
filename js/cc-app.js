angular.module('cc-app', ['ngAnimate', 'ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "home.html"
	})
	.when("/countries", {
		templateUrl: "countries.html"
	})
	.when("/countries/:countryCode", {
		templateUrl: "countryDetail.html"
	})
	.otherwise({
		redirectTo: "/"
	})
}]);