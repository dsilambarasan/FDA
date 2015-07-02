/**
 * @file
 * Drug report angular JS code.
 */
var app = angular.module('fdaapp', ['ui.bootstrap']);
app.controller('fdaCtrl', function($scope, drugUtilities, $timeout) {

    $scope.chosen = {
        "isSerious": false,
        "isReport": false,
        "isGender": false,
        "isAgeRange": false
    };

    $scope.seriousness = 2;
    $scope.reporting = 2;
    $scope.gender = 2;
    $scope.fromage = 1;
    $scope.toage = 99;

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
        if ($scope.chosen.isSerious) {
            drugTURL += '+AND+(serious:' + $scope.seriousness + ')';
            drugCURL += '+AND+(serious:' + $scope.seriousness + ')';
        }
        if ($scope.chosen.isGender) {
            drugTURL += '+AND+(patient.patientsex:' + $scope.gender + ')';
            drugCURL += '+AND+(patient.patientsex:' + $scope.gender + ')';
        }
        if ($scope.chosen.isAgeRange) {
            drugTURL += '+AND+patient.patientonsetage:[' + $scope.fromage + '+TO+' + $scope.toage + ']';
            drugCURL += '+AND+patient.patientonsetage:[' + $scope.fromage + '+TO+' + $scope.toage + ']';
        }
        drugTURL += '';
        drugCURL += '&count=patient.reaction.reactionmeddrapt.exact';
        //console.log(drugTURL, drugCURL);
        $scope.totalDrugDetails(drugTURL);
        $scope.CountDrugDetails(drugCURL);
        // $(".collapse").collapse('hide');
        $scope.myloader = false;
    }


    $scope.totalDrugDetails = function(drugTURL) {
        //var drugTURL      =   'https://api.fda.gov/drug/event.json?&search=(patient.drug.medicinalproduct:"'+$scope.drugName+'"+AND+(serious:2)+AND+(patient.patientsex:2)+AND+patient.patientonsetage:[5+TO+17])';
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

    $scope.CountDrugDetails = function(drugCURL) {
        //var drugCURL      =   'https://api.fda.gov/drug/event.json?&search=(patient.drug.medicinalproduct:"'+$scope.drugName+'"+AND+(serious:2)+AND+(patient.patientsex:2)+AND+patient.patientonsetage:[5+TO+17])&count=patient.reaction.reactionmeddrapt.exact';
        drugUtilities.getContents({
            method: 'GET',
            url: drugCURL,
            data: {},
            success: function(data) {
                // console.log(data);
                $scope.countDrugData = data.results;
                $scope.donutArray = [];
                angular.forEach($scope.countDrugData, function(key, value) {
                    if (value < 10) {
                        $scope.donutArray.push([key.term, key.count]);
                    }
                });
                console.log($scope.donutArray);

                var chart = c3.generate({
                    bindto: '#chart',
                    data: {
                        columns: $scope.donutArray,
                        type: 'donut'
                    }
                });

            }
        });
    }

    $scope.seriousCheck = function() {
        console.log($scope.isSerious, $scope.seriousness);
        $scope.makeDrugURL();
    }

    $scope.reportCheck = function() {
        console.log($scope.isReport);
        $scope.makeDrugURL();
    }

    $scope.genderCheck = function() {
        console.log($scope.isGender);
        $scope.makeDrugURL();
    }

    $scope.ageRangeCheck = function() {
        console.log($scope.isAgeRange);
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