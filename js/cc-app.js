angular.module('cc-app', ['ngAnimate', 'ngRoute'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when("/", {
		templateUrl: "home.html"
	})
	.when("/countries", {
		templateUrl: "countries.html",
		controller: "CountryCtrl",
		controllerAs: "cc"
	})
	.when("/countries/:country", {
		templateUrl: "countryDetail.html",
		controller: "DetailCtrl",
		controllerAs: "dc"
	})
	.otherwise({
		redirectTo: "/"
	})
}])
.controller('CountryCtrl', ['$scope','$routeParams', 'getData', function($scope, $routeParams, getData){
	var cc = this;
	cc.getCountries = function() {
		getData('countryInfoJSON?')
		.then(function(data){
			cc.countries = data.geonames;
			console.log(cc.countries);
		});
		
	};
	cc.getCountries();
}])
.controller('DetailCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
	var dc = this;
	dc.test = 'test';
	dc.country = $routeParams.country;
}]);