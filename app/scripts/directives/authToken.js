'use strict';

angular.module('docs.giv2giv.orgApp')
  .directive('authToken', function () {
    return {
      template: '<span>Access Token:</span>'
				+'<input type="text" ng-model="authToken" class="authToken"/>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      	scope.$watch("authToken", function(value){
      		$('.authToken').val(value);
      	});
      }
    };
  });
