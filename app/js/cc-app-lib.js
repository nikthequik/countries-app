angular.module('cc-app')

.constant('CC_APP_USERNAME', 'nikthequik')
.constant('CC_APP_PREFIX', 'http://api.geonames.org/')

.service('getData', ['$http', '$q', 'CC_APP_PREFIX', 'CC_APP_USERNAME', function($http, $q, CC_APP_PREFIX, CC_APP_USERNAME){
	return function(endpoint, params, cache){
		var data = null;
		params = (typeof params === 'object') ? params : {};
		params = params === null ? {} : params;
		params.username = CC_APP_USERNAME;
		if (cache){
			data = localStorage.getItem(endpoint);
		}
		if (!data) {
			var url = CC_APP_PREFIX + endpoint;
			return $http.get(url, {params:params})
			.then (function(res){
				if (cache && res.data.geonames){
					localStorage.setItem(endpoint, JSON.stringify(res.data));
				}
				return res.data;
			})
		}
		return $q.when(JSON.parse(data));
	}
}]);