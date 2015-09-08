//only put one variable into the global namespace

var myApp = angular.module('myApp', []);
//takes string name, and array of dependencies


//model wants to be connected to view.  This is where we do it.

//eerythign else is added to the myApp variable

myApp.controller("mainController", function() {

});