var MyApp = angular.module('myApp',[]);

MyApp.controller('MainCtrl', ['$scope',function($scope){
	
	$scope.user = {};
    $scope.user.details = {
      "username": "My User",
      "id": "1234567"
    };
	
}]);

MyApp.directive('customButton', function () {
  return {
    restrict: 'AE',
    replace: true,
    transclude: true,
    template: '<a href="http://www.google.com" class="myawesomebutton" ng-transclude>' +
                '<i class="icon-ok-sign"></i>' +
              '</a>',
    link: function (scope, element, attrs) {
      
    }
  };
});