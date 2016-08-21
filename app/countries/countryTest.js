describe('cc-app', function() {
    var $controller, $scope, getData;
    beforeEach(module('cc-app', function($provide){
        getData = jasmine.createSpyObj("getData", ["countries"]);

        getData.load.andReturn({
            countries: "countries"
        });

        $provide.value("getData", getData);
    }));
    
   //Controller Tests
    beforeEach(inject(function(_$controller_, $rootScope, _getData_) {
        $scope = $rootScope.$new();
        getData = _getData_;
        $controller = _$controller_('CountryCtrl', {
            $scope : $scope,
            getData: getData
            /*allCountriesModel : [],
            getData : function() {return true;}*/
        });
    }));
    
    it('should query GeoNames from API on load', function() {

        console.log($scope.tester);
        expect($scope.tester).toBeDefined();
    });
    
})  
