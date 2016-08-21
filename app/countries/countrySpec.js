describe('CountryCtrl', function(){
	beforeEach(module('cc-app'));

	var CountryCtrl;

	beforeEach(inject(function(_CountryCtrl_){
	    CountryCtrl = _CountryCtrl_;
	}));

	it('has tester property', function(){
		expect(CountryCtrl.tester).toBe("test");
	});

	/*it('getCountries', function(){
		CountryCtrl.getCountries;
	})*/
})