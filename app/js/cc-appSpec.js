describe("cc-app", function() {
    beforeEach(module("cc-app"));

    //Route Tests
    describe("root route", function() {
        it('should load the template',
        inject(function($location, $rootScope, $httpBackend, $route) {
            $httpBackend.whenGET('home.html').respond('...');

            $rootScope.$apply(function() {
                $location.path('/home');
            });

            $httpBackend.flush();
            expect($route.current.loadedTemplateUrl).toBe("home.html");
            $httpBackend.verifyNoOutstandingRequest();
        }));
    });

    describe("/countries route", function() {
        it('should load the template and controller',
        inject(function($location, $rootScope, $httpBackend, $route) {
            $httpBackend.whenGET('countries/countries.html').respond('...');

            $rootScope.$apply(function() {
                $location.path('/countries');
            });

            $httpBackend.flush();
            expect($route.current.controller).toBe("CountryCtrl");
            expect($route.current.loadedTemplateUrl).toBe("countries/countries.html");

            $httpBackend.verifyNoOutstandingRequest();
        }));
    });

    describe("/countries/:country route", function() {
        it('should load the template and controller',
        inject(function($location, $rootScope, $httpBackend, $route) {
            $httpBackend.whenGET('countryDetail/countryDetail.html').respond('...');

            $rootScope.$apply(function() {
                $location.path('/countries/:country');
            });

            $httpBackend.flush();
            expect($route.current.controller).toBe("DetailCtrl");
            expect($route.current.loadedTemplateUrl).toBe("countryDetail/countryDetail.html");

            $httpBackend.verifyNoOutstandingRequest();
        }));
    });
});