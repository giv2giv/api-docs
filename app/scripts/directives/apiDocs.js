'use strict';

angular.module('docs.giv2giv.orgApp')
  .directive('apiDocs', function () {
    return {
      scope:{ docsUrl: "@url", docsSsl: "@ssl", docsDescription: "@desc" },
      transclude: true,
      template: '<div>'
      				+'<h1 class="page-header">{{docsUrl}}'
      				+'<small>{{docsDescription}}</small></h1>'
      				+'<div ng-transclude></div>'
      			+'</div>',
      restrict: 'E',
      controller: function($scope, $q, $timeout, $rootScope){
        this.data = $scope;

        $rootScope.$on("ParamUrl.Updated", function(event, value){
          console.log(value);
          $rootScope.param = value;
          
          for(var key in value){
            $("." + key).val(value[key]);
          }
         
        });

      },
      link: function postLink(scope, elm, attrs) {

      }
    };
  });
