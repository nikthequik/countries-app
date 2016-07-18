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
.controller('CountryCtrl', ['getData', '$location',  function(getData, $location){
	var cc = this;
	cc.getCountries = function() {
		getData('countryInfoJSON?', undefined, true)
		.then(function(data){
			cc.countries = data.geonames;
		});
	};
	cc.getCountries();
}])
.controller('DetailCtrl', ['$routeParams', 'getData', function($routeParams, getData){
	var dc = this;
	dc.area = 
	dc.country = JSON.parse($routeParams.country);
	dc.getNeighbors = function(params) {
		getData('neighboursJSON', {geonameId: params}, false)
		.then(function(data){
			
			if (data.geonames) {
				dc.neighborCount = data.geonames.length;
				dc.neighbors = data.geonames;
			}
			else {
				dc.neighborCount = "No";
			}
			
			console.log(dc.country);
		})
	};
	dc.getNeighbors(dc.country.geonameId);	
}]);