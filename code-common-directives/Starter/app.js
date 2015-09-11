var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter) {
    
    $scope.handle = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.handle);
    };
    $scope.characters = 5;
    $scope.rules = [
        {rulesname: 'Must be five characters'},
        {rulesname: 'Must be unique'},
        {rulesname: 'Must be cool'}  
    ];
    
}]);
