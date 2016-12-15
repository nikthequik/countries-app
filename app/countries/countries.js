angular.module('cc-app')
.controller('CountryCtrl', ['getData', '$location',  function(getData, $location){
	var cc = this;
	cc.getCountries = function() {
		getData('countryInfoJSON', undefined, true)
		.then(function(data){
			console.log(data);
			cc.countries = data.geonames;
		});
	};
	cc.getCountries();
}]);