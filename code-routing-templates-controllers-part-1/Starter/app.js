var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    //lets us specify routes.  Will patch patterns also
    $routeProvider
        //home page '/'
        .when('/',{
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        //other pages '/text'
        .when('/second',{
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
});



myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {
    
    //$log.info($location.path());
    $scope.name = '1';
    
}]);

myApp.controller('secondController', ['$scope', '$location', '$log', function($scope, $location, $log) {
    
    //$log.info($location.path());
    $scope.name = '2';
    
}]);