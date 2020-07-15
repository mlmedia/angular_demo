/* set module object */
var phonecatServices = angular.module('phonecatServices', ['ngResource']);

/* set up the factory with $resource */
phonecatServices.factory('Phone', ['$resource',
    function ($resource) {
		return $resource('phones/:phoneId.json', {}, {
			query: {
				method: 'GET',
				params: {
					phoneId: 'phones'
				},
				isArray: true
			}
		});
    }
]);
