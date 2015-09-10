var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $log) {
    $log.info("Some info");
    $log.debug("Debug info while coding");
    $log.log("This is the same as console.log()");
    $log.error("Def an error");
    $log.warn("Warning!");
    
});