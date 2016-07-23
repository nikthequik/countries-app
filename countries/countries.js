angular.module('cc-app')
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
}]);