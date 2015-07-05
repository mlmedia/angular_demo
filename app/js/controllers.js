/* set module object */
var phonecatControllers = angular.module('phonecatControllers', []);

/* controller for list view*/
phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', function($scope, Phone)
{
    /* add phones to $scope from Phone services query */
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
}]);

/* controller for detail view*/
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', function($scope, $routeParams, Phone)
{
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
        $scope.mainImageUrl = phone.images[0];
    });

    /* set image for thumbnail switcher */
    $scope.setImage = function(imageUrl) {
        $scope.mainImageUrl = imageUrl;
    }
}]);
