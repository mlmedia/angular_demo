/* set module object */
var phonecatApp = angular.module('phonecatApp', []);

/* controller */
phonecatApp.controller('PhoneListCtrl', function ($scope)
{
    /* pass phones JSON object to the $scope */
    $scope.phones = [
        {
            'name': 'Nexus S',
            'snippet': 'Fast just got faster with Nexus S.',
            'age': 1
        },
        {
            'name': 'Motorola XOOM™ with Wi-Fi',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 2
        },
        {
            'name': 'MOTOROLA XOOM™',
            'snippet': 'The Next, Next Generation tablet.',
            'age': 3
        }
    ];

    //$scope.orderProp = 'age';
    var phonecatApp = angular.module('phonecatApp', []);

    /* another object for scope */
    $scope.name = "World";
});
