'use strict';

describe('Controller : MainCtrl', function() {
  var scope, httpBackend;//we'll use this scope in our tests

  //mock Application to allow us to inject our own dependencies
  beforeEach(angular.mock.module('reportApp'));
  //mock the controller for the same reason and include $rootScope and $controller
  beforeEach(angular.mock.inject(function($rootScope, $httpBackend, $controller){
    //create an empty scope
    scope = $rootScope.$new();
    httpBackend = $httpBackend;
    //declare the controller and inject our empty scope
    $controller('MainCtrl', {$scope: scope});
  }));

  // tests cases start here
  it('initialize main controller', function() {
    console.log('Checking Controller Initilization..');
    expect(scope.myVar).toBe(1);
  });

  it('should initialize filters', function() {
    console.log('Checking Filter Initilization..');
    expect(Object.keys(scope.chosen).length).toEqual(5);
  });

  it('check filter default values', function () {
    console.log('Checking filter initial values..');
    var log = [];
    angular.forEach(scope.chosen, function(value, key) {
      this.push(key + ': ' + value);
    }, log);
    expect(log).toEqual(['isSerious: false', 'isReport: false', 'isGender: false', 'isAgeRange: false', 'isYear: false']);
  });

  it('check email URL construction', function() {
    console.log('Checking Email URL Construction..');
    scope.drugName      =      "advil";
    scope.makeDrugURL();
    expect(scope.maildrugCURL).toEqual('http://ec2-52-0-103-219.compute-1.amazonaws.com?drugName=advil');
  });

  it('should call feed API with sample drug name without filters', function()  {
    console.log('Testing for Feed API call with following filters:  "Drugname: Advil"');
    var resultDrugTURL  =    'https://api.fda.gov/drug/event.json?api_key=pw60LprRW1vp9WXwFtosc6lT7Tm50AvH35rnIbOK&search=(patient.drug.medicinalproduct:"advil")+';
    resultDrugTURL += '(patient.drug.openfda.substance_name:"advil")+(patient.drug.openfda.product_type:"advil")+';
    resultDrugTURL += '(patient.drug.openfda.manufacturer_name:"advil")+(patient.drug.openfda.brand_name:"advil")+(patient.drug.openfda.generic_name:"advil")+';
    resultDrugTURL += '(patient.drug.openfda.application_number:"advil")';
    scope.chosen     =     {
      "isSerious": false,
      "isReport": false,
      "isGender": false,
      "isAgeRange": false,
      "isYear": false
    };
    scope.drugName    =    "advil";
    scope.makeDrugURL();
    expect(scope.drugFeedURL).toEqual(resultDrugTURL);
  });

  it('should call feed API with sample drug name with few filters', function()  {
    console.log('Testing for Feed API call with following filters "drugname: Advil, Report: Manufacturer, Age Range Between: 1 - 120"');
    var resultDrugTURL  =    'https://api.fda.gov/drug/event.json?api_key=pw60LprRW1vp9WXwFtosc6lT7Tm50AvH35rnIbOK&search=(patient.drug.medicinalproduct:"advil")+';
    resultDrugTURL = '(patient.drug.openfda.substance_name:"advil")+(patient.drug.openfda.product_type:"advil")+';
    resultDrugTURL = '(patient.drug.openfda.manufacturer_name:"advil")+(patient.drug.openfda.brand_name:"advil")+';
    resultDrugTURL = '(patient.drug.openfda.generic_name:"advil")+(patient.drug.openfda.application_number:"advil")';
    scope.chosen     =     {
      "isSerious": false,
      "isReport": true,
      "isGender": false,
      "isAgeRange": true,
      "isYear": false
    };
    scope.drugName    =    "advil";
    scope.makeDrugURL();
    expect(scope.drugFeedURL).not.toEqual(resultDrugTURL);
  });
});
