var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    $log.log($scope);
}]);

//myApp.controller("mainController",["$scope","$log",function(o,l){l.log(o)}]);

//If i minify the above, it changes the names of the variable and breaks dependency injection
//Solution comes through angular creators
//by passing an array to the controller.  Allows the inclusion of strings, so we can 
//pass them into the variable anmes.  Only have to exist in one place.  The first and second
//controllers are equivalent, although the second is much better
//ORDER OF THIGNS NOW MATTERS.  IF NOT USING AN ARRAY, IT DOES NOT

