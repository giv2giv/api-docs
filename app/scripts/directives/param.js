'use strict';

angular.module('docs.giv2giv.orgApp')
  .directive('param', function () {
    return {
      template: '<div class="endpoint__param" ng-init="param[name] = 12345;">'
      	      		+'<label class="endpoint__param-label">{{name}}:</label>'
                  //+'<input type="text" ng-model="url" class="endpoint__param-input"/>'
                  +'<ng-switch on="type">'
                    +'<input ng-switch-when="url" type="text" ng-model="$parent.param[name]" class="{{name}} endpoint__param-input" ng-init="$parent.param[name] = default"/>'
      	      	  	+'<input ng-switch-default type="text" name="{{name}}" value="{{default}}" class="endpoint__param-input"/>'
                  +'</ng-switch>'
      	      		+'<span class="endpoint__param-type">{{type}}:</span>'
      	      		+'<span>{{description}}</span>'	      		
          			+'</div>',
      restrict: 'E',
      replace: true,
      scope: {
      	name: "@name",
      	type: "@type",
      	description: "@description",
      	default: "@default"
      },
      controller: function($scope, $rootScope){
        $scope.param = {};
        $scope.$watch("param" ,function(value){

          $rootScope.$broadcast('ParamUrl.Updated', value);
        }, true);
      },
      link: function postLink(scope, iElement, iAttrs) {

      }
    };
  });
