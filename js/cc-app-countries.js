angular.module('cc-app')

.constant('CC_APP_USERNAME', 'nikthequik')
.constant('CC_APP_PREFIX', 'http://api.geonames.org/')

.factory('getData', ['$http', '$q', 'CC_APP_PREFIX', 'CC_APP_USERNAME', function($http, $q, CC_APP_PREFIX, CC_APP_USERNAME){
	return function(endpoint, params){
		var url = CC_APP_PREFIX + endpoint + 'username=' +CC_APP_USERNAME;
		console.log(url);
		return $http.get(url, params)
		.then (function(res){
			return res.data;
		})
	}
}]);