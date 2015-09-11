
var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function ($scope, $filter) {
    $scope.handle = ''; //bound to ng-model="handle"
    
    $scope.lowerhandle = function () {
        return $filter('lowercase')($scope.handle); //return is critical
    };
    
    
}]);