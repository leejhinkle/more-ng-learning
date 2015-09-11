var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function ($scope, $filter, $timeout) {
    $scope.handle = '';
    $scope.lowerhandle = function () {
        return $filter('lowercase')($scope.handle);
    };
    $scope.$watch('handle', function (newValue, oldValue) {
        console.info('old', oldValue);
        console.log('new', newValue);
    });
    
    //trying fun new things and getting around the digest loop.
    //vanilla JS.  WTF?
    $timeout(function () {
        $scope.$apply(function () {
            $scope.handle = 'newTwitterHandle';
            console.log('Handle changed!');
        });
    }, 3000);
}]);