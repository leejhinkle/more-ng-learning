var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.service('nameService',function(){
    var self = this;
    this.name = 'JD';
    this. nameLength = function(){
        //use self beause this woul refer to the function we are currently in
        return self.name.length;
    };
});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService) {
    
    $scope.name = nameService.name;
    //update name service when necessary
    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });
    $log.log(nameService.name);
    $log.log(nameService.nameLength());
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    
    $scope.name = nameService.name;
    //update name service when necessary
    $scope.$watch('name', function(){
        nameService.name = $scope.name;
    });
    $scope.num = $routeParams.num || 1;
    
}]);
