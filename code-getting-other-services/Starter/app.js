var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource) {
    $log.info("Some info");
    $log.debug("Debug info while coding");
    $log.log("This is the same as console.log()");
    $log.error("Def an error");
    $log.warn("Warning!");
    
    $scope.name = 'John'
    $scope.formattedName = $filter('uppercase')($scope.name);
    
    $log.log($scope.name);
    $log.info($scope.formattedName);
    
    console.log($resource);
    
});

var things = [1, '2', function(){alert("Hello")}];

things[2]();
console.log(things);
