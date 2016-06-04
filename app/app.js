angular.module('signonApp', [])

.directive('optIn', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: ' <div class="brand-logo" ng-transclude></div>',
        replace: true
    }
})

.controller('InputCtrl', function(){
	ic = this;

	ic.test = "this is a test";

})