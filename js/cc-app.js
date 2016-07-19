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
.factory('allCountriesModel', function(){
	return {
		'countries': []
	}
})
.controller('CountryCtrl', ['getData', '$location', 'allCountriesModel',  function(getData, $location, allCountriesModel){
	var cc = this;
	cc.getCountries = function() {
		getData('countryInfoJSON?', undefined, true)
		.then(function(data){
			cc.countries = data.geonames;
			allCountriesModel.countries = cc.countries;
		});
	};
	cc.getCountries();
}])
.controller('DetailCtrl', ['$routeParams', 'getData', 'allCountriesModel', '$location', function($routeParams, getData, allCountriesModel, $location){
	var dc = this;
	
	dc.country = JSON.parse($routeParams.country);
	dc.allCountries = [];
	
	dc.goToCountry = function(neighbor) {
		angular.forEach(allCountriesModel.countries, function(item){
			if (item.countryCode === neighbor.countryCode) {
				console.log(item);
				$location.path('/countries/' + JSON.stringify(item));
			}
		});
	}
	dc.getCapital = function(featureCode, country) {
		var params = {
			"country": country,
			"featureCode": featureCode,
		}
		getData('searchJSON', params, false)
		.then(function(data){
			console.log(data.geonames[0].name);
			dc.capital = data.geonames[0].name;
			dc.capPop = data.geonames[0].population;
		})
	};
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
		})
	};
	dc.getNeighbors(dc.country.geonameId);
	dc.getCapital("PPLC", dc.country.countryCode);
}]);