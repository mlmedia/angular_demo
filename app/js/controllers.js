/* set module object */
var phonecatControllers = angular.module('phonecatControllers', []);

/* controller for list view*/
phonecatControllers.controller('PhoneListCtrl', function ($scope, $http)
{
    /* pass data from JSON file pulled from HTTP request to $scope */
    $http.get('phones/phones.json').success(function(data)
    {
        $scope.phones = data;
        //$scope.phones = data.splice(0, 5);
    });

    /* set default order */
    $scope.orderProp = 'age';
});

/* controller for detail view */
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
    /* pass data from JSON file to $scope */
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
        $scope.phone = data;
    });
}]);
