var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {

    $scope.handle = '';

    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    };

    $scope.characters = 5;
    
    $http.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk')
        .success(function(result){
            $scope.rules = result;
            console.log(result);            
        })
        .error(function(err){
            console.log(err, status);
        });
    
    $scope.newRule = '';
    $scope.addRule = function () {
        /*$http.post('/url', { newRule : $scope.newRule})
            .success(function(result){
                $scope.rules = result;
                $scope.newRule = '';
            })    
            .error(function(data, status){
                console.log(data);
            })
        */
    };
/* no need for native JS httprequest code.  Going to do it the angular way
    var rulesrequest = new XMLHttpRequest();
    rulesrequest.onreadystatechange = function () {
        $scope.$apply(function () {
            if (rulesrequest.readyState == 4 && rulesrequest.status == 200) {
                $scope.rules = JSON.parse(rulesrequest.responseText);
            }
        });
    }
    rulesrequest.open("GET", "http://localhost:54765/api", true);
    rulesrequest.send();
*/
}]);