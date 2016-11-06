angular.module('cc-app')
.controller('DetailCtrl', ['$routeParams', 'getData', 'allCountriesModel', '$location', function($routeParams, getData, allCountriesModel, $location){
	var dc = this;
	
	dc.country = JSON.parse($routeParams.country);
	dc.allCountries = [];
	
	dc.goToCountry = function(neighbor) {
		angular.forEach(allCountriesModel.countries, function(item){
			if (item.countryCode === neighbor.countryCode) {
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
			dc.toggleCapPop = data.geonames[0]===undefined ? 0 : 1;
			dc.capital = data.geonames[0]===undefined ? "No Capital" : data.geonames[0].name;
			dc.capPop = data.geonames[0]===undefined ? "No Inhabitants" : data.geonames[0].population;
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