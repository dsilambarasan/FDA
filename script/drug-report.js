/**
 * @file
 * Drug report angular JS code.
 */
$(function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 1,
    max: 99,
    values: [ 0, 99 ],
    slide: function( event, ui ) {
      $( "#amount" ).val(ui.values[ 0 ] + "-" + ui.values[ 1 ] );
      $( "#min" ).val(ui.values[ 0 ]);
      $( "#max" ).val(ui.values[ 1 ]);
    }
  });
  $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +'-'+ $( "#slider-range" ).slider( "values", 1 ) );

  $( "#min" ).val( $( "#slider-range" ).slider( "values", 0 ));
  $( "#max" ).val( $( "#slider-range" ).slider( "values", 1 ));
});

var app = angular.module('fdaapp', ['ui.bootstrap']);
app.controller('fdaCtrl', function($scope, drugUtilities, $timeout) {

  $scope.chosen = {
    "isSerious": false,
    "isReport": false,
    "isGender": false,
    "isAgeRange": false,
    "isYear": false
  };

  $scope.seriousness = 2;
  $scope.reporting = 2;
  $scope.gender = 2;
  $scope.fromage = 1;
  $scope.toage = 99;

  $scope.fromyear = 1970;
  $scope.toyear = 2015;

  $scope.myVar = 1;

  $scope.maildrugCURL = 'http://54.254.212.175/FDA/index.html';

  function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);	
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  $scope.$watch('myVar', function() {

    $scope.drugName = getParameterByName('drugName');

    if(getParameterByName('drugName')){
      if(getParameterByName('seriousness')){
        $scope.chosen.isSerious = true;
        $scope.seriousness = getParameterByName('seriousness');
      }

      if(getParameterByName('paientsex')){
        $scope.chosen.isGender = true;
        $scope.gender = getParameterByName('paientsex');
      }

      if(getParameterByName('reporting')){
        $scope.chosen.isReport = true;
        $scope.reporting = getParameterByName('reporting');
      }

      if(getParameterByName('fromage')){
        $scope.chosen.isAgeRange = true;
        $scope.fromage =  parseInt(getParameterByName('fromage'), 10);
        $scope.toage =  parseInt(getParameterByName('toage'), 10);
      }

      if(getParameterByName('fromyear')){
        $scope.chosen.isYear = true;
        $scope.fromyear = parseInt(getParameterByName('fromyear'), 10);
        $scope.toyear = parseInt(getParameterByName('toyear'), 10);
      }
      $scope.makeDrugURL();
    }
    else{
      var drugTURL = 'https://api.fda.gov/drug/event.json';
      var drugCURL = 'https://api.fda.gov/drug/event.json?&count=patient.reaction.reactionmeddrapt.exact';
      $scope.totalDrugDetails(drugTURL);
      $scope.countDrugDetails(drugCURL);
    }
  });


  $scope.changeKey = function(key) {
    $scope.key = key;
    angular.forEach($scope.chosen, function(key, value) {
      if (value == $scope.key) {
        $scope.chosen[value] = false;
      }
    });
    $scope.makeDrugURL();
  }

  $scope.makeDrugURL = function() {
    $scope.myloader = true;
    var drugTURL = 'https://api.fda.gov/drug/event.json?api_key=pw60LprRW1vp9WXwFtosc6lT7Tm50AvH35rnIbOK&search=(patient.drug.medicinalproduct:"' + $scope.drugName + '"+OR+patient.reaction.reactionmeddrapt:"' + $scope.drugName + '"+OR+patient.drug.openfda.substance_name:"' + $scope.drugName + '"+OR+patient.drug.drugindication:"' + $scope.drugName + '"+OR+patient.drug.drugdosageform:"' + $scope.drugName + '"+OR+patient.drug.openfda.product_type:"' + $scope.drugName + '"+OR+patient.drug.openfda.pharm_class_cs:"' + $scope.drugName + '"+OR+patient.drug.openfda.manufacturer_name:"' + $scope.drugName + '"+OR+patient.drug.openfda.brand_name:"' + $scope.drugName + '"+OR+patient.drug.openfda.pharm_class_epc:"' + $scope.drugName + '"+OR+patient.drug.openfda.generic_name:"' + $scope.drugName + '"+OR+patient.drug.openfda.application_number:"' + $scope.drugName + '")';
    var drugCURL = 'https://api.fda.gov/drug/event.json?api_key=pw60LprRW1vp9WXwFtosc6lT7Tm50AvH35rnIbOK&search=(patient.drug.medicinalproduct:"' + $scope.drugName + '"+OR+patient.reaction.reactionmeddrapt:"' + $scope.drugName + '"+OR+patient.drug.openfda.substance_name:"' + $scope.drugName + '"+OR+patient.drug.drugindication:"' + $scope.drugName + '"+OR+patient.drug.drugdosageform:"' + $scope.drugName + '"+OR+patient.drug.openfda.product_type:"' + $scope.drugName + '"+OR+patient.drug.openfda.pharm_class_cs:"' + $scope.drugName + '"+OR+patient.drug.openfda.manufacturer_name:"' + $scope.drugName + '"+OR+patient.drug.openfda.brand_name:"' + $scope.drugName + '"+OR+patient.drug.openfda.pharm_class_epc:"' + $scope.drugName + '"+OR+patient.drug.openfda.generic_name:"' + $scope.drugName + '"+OR+patient.drug.openfda.application_number:"' + $scope.drugName + '")';

    $scope.maildrugCURL = 'http://54.254.212.175/FDA/index.html?drugName='+ $scope.drugName;

    if ($scope.chosen.isSerious) {
      drugTURL += '+AND+(serious:' + $scope.seriousness + ')';
      drugCURL += '+AND+(serious:' + $scope.seriousness + ')';
      $scope.maildrugCURL += '%26seriousness='+ $scope.seriousness;
    }
    if ($scope.chosen.isGender) {
      drugTURL += '+AND+(patient.patientsex:' + $scope.gender + ')';
      drugCURL += '+AND+(patient.patientsex:' + $scope.gender + ')';
      $scope.maildrugCURL += '%26paientsex='+ $scope.gender;
    }
    if ($scope.chosen.isAgeRange) {
      drugTURL += '+AND+patient.patientonsetage:[' + $scope.fromage + '+TO+' + $scope.toage + ']';
      drugCURL += '+AND+patient.patientonsetage:[' + $scope.fromage + '+TO+' + $scope.toage + ']';
      $scope.maildrugCURL += '%26fromage=' + $scope.fromage;
      $scope.maildrugCURL += '%26toage=' + $scope.toage;
    }
    if ($scope.chosen.isReport) {
      $scope.maildrugCURL += '%26reporting=' + $scope.reporting; 
    }
    if ($scope.chosen.isYear) {
      drugTURL += '+OR+receivedate:[' + $scope.fromyear+'0101' + '+TO+' + $scope.toyear +'0101' +']';
      drugCURL += '+OR+receivedate:[' + $scope.fromyear+'0101' + '+TO+' + $scope.toyear +'0101' +']';
      $scope.maildrugCURL += '%26fromyear=' + $scope.fromyear;
      $scope.maildrugCURL += '%26toyear=' + $scope.toyear;
    }
    drugTURL += '';
    drugCURL += '&count=patient.reaction.reactionmeddrapt.exact';
    //console.log(drugTURL, drugCURL);
    $scope.totalDrugDetails(drugTURL);
    $scope.countDrugDetails(drugCURL);

    // $(".collapse").collapse('hide');
    $scope.myloader = false;
  }


  $scope.totalDrugDetails = function(drugTURL) {
    // console.log(drugTURL);
    drugUtilities.getContents({
      method: 'GET',
      url: drugTURL,
      data: {},
      success: function(data) {
        //console.log(data);
        $scope.totalDrugData = data.meta.results.total;
      }
    });
  }

  $scope.countDrugDetails = function(drugCURL) {
    // console.log(drugCURL);
    drugUtilities.getContents({
      method: 'GET',
      url: drugCURL,
      data: {},
      success: function(data) {
        // console.log(data);
        $scope.countDrugData = data.results;
        $scope.donutChart();
      }
    });
  }

  $scope.donutChart		=		function() {
    $scope.donutArray 	= 		[];
    angular.forEach($scope.countDrugData, function(value, key) {
      // console.log(value, key);
      if (key < 10) {
        $scope.donutArray.push([value.term, value.count]);
      }
    });
    // console.log($scope.donutArray);
    $timeout(function() {
      c3.generate({
        bindto: '#chart',
        data: {
          columns: $scope.donutArray,
          type: 'donut',
        },
        donut: {
          title: ""
        }
      });
    });
  }

  $scope.seriousCheck = function() {
    //console.log($scope.isSerious, $scope.seriousness);
    $scope.makeDrugURL();
  }

  $scope.reportCheck = function() {
    //console.log($scope.isReport);
    $scope.makeDrugURL();
  }

  $scope.genderCheck = function() {
    //console.log($scope.isGender);
    $scope.makeDrugURL();
  }

  $scope.ageRangeCheck = function() {
    //console.log($scope.isAgeRange);
    $scope.makeDrugURL();
  }
  $scope.yearCheck = function() {
    //console.log($scope.isYear);
    $scope.makeDrugURL();
  }
});

angular.module('fdaapp').factory('drugUtilities', [
  '$http',
  function($http) {
    return {
      getContents: function(options) {
        $http({
          method: options.method,
          url: options.url,
          data: options.data
        }).success(function(data, status, headers, config) {
          // this callback will be called synchronously
          // when the response is available
          if (options.success) {
            options.success(data, status, headers, config);
          }
        });
      }
    };
  }
]);

angular.module('fdaapp').directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind("keydown keypress", function(event) {
      if (event.which === 13) {
        scope.$apply(function() {
          scope.makeDrugURL();
          scope.$eval(attrs.ngEnter, {
            'event': event
          });
        });

        event.preventDefault();
      }
    });
  };
});

