/* create filter checkmark module */
angular.module('phonecatFilters', []).filter('checkmark', function () {
	return function (input) {
		return input ? '\u2713' : '\u2718';
	};
});
