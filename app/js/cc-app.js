angular.module("cc-app", ["ngAnimate", "ngRoute", "ui.bootstrap"])
.config(["$routeProvider", function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "home.html"
	})
	.when("/countries", {
		templateUrl: "countries/countries.html",
		controller: "CountryCtrl",
		controllerAs: "cc"
	})
	.when("/countries/:country", {
		templateUrl: "countryDetail/countryDetail.html",
		controller: "DetailCtrl",
		controllerAs: "dc"
	})
	.otherwise({
		redirectTo: "/"
	})
}]);


