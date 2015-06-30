/* set module object */
var phonecatApp = angular.module('phonecatApp', []);

/* controller */
phonecatApp.controller('PhoneListCtrl', function ($scope, $http)
{
    /* pass data from JSON file pulled from HTTP request to $scope */
    $http.get('phones/phones.json').success(function(data)
    {
        //$scope.phones = data;
        $scope.phones = data.splice(0, 5);
    });

    /* set default order */
    $scope.orderProp = 'age';
});
