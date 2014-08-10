'use strict';

angular.module('docs.giv2giv.orgApp')
  .directive('endpoint', function () {
    return {
      template: '<div class="endpoint">'
			+'<div class="endpoint__heading">'
				+'<span class="endpoint__method">{{epMethod | upperCase}}</span>'
				+'<span class="endpoint__url">{{epUrl}}</span>'
				+'<auth-token/>'
			+'</div>'
			+'<form>'
				+'<p class="endpoint_description">{{epDescription}}</p>'
				+'<div class="endpoint__params" ng-transclude></div>'
				+'<button class="btn" ng-click="submit()">Try it</button>'
			+'</form>'
			+'<div class="endpoint__request-url" ng-show="request">'
				+'<span class="endpoint__url-label">Request url:</span>'
				+'<span>{{requestUrl}}</span>'
			+'</div>'
			+'<div class="endpoint__request" ng-show="request">'
				+'<span>Request</span>'
				+'<pre class="endpoint__output">{{request | json}}</pre>'
			+'</div>'
			+'<div class="endpoint__response" ng-show="response">'
				+'<span>Response</span>'
				+'<span class="endpoint__response-code" ng-class="responseClass">{{responseCode}}</span>'
				+'<pre class="endpoint__output">{{response | json}}</pre>'
			+'</div>'
		+'</div>',
      restrict: 'E',
      transclude: true,
      scope: {
      	epUrl: "@url",
      	epMethod: "@method",
      	epDescription: "@description",
      	epFormat: "@format",
      	epAuth: "@auth",
      	request: "@",
      	response: "@",
      	responseCode: "@"
      },
      require: "^apiDocs",
      link: function postLink(scope, elm, attrs, apiDocsCtrl) {
      	scope.data = apiDocsCtrl.data;
      	
      },
      controller: function($scope, $rootScope, $element, $http){

		$scope.submit = function(){

			//TODO if proxy is defined use that url instead of the docsUrl

			$scope.epDomain = $scope.data.docsUrl;

			$scope.authToken = $('.authToken').val();

			$scope.docsSsl = $scope.data.docsSsl;

			var formData = $element.find('form').serializeArray();

			var requestObj = {}

			$.each(formData, function(i, v){
				requestObj[v.name] = v.value;
			});

			$scope.request = requestObj;

			var httpProtocol = "";

			if($scope.docsSsl == "true"){
				httpProtocol = "https://"
			}else{
				httpProtocol = "http://"
			}

			$scope.requestUrl = httpProtocol + $scope.epDomain + $scope.epUrl;

			var httpObj = {
				method: $scope.epMethod.toUpperCase(), 
				url:  $scope.requestUrl, 
				data: $scope.request
			}

			if($scope.epAuth == "true"){

				httpObj["headers"] =  {'Authorization': 'Token token=' + $scope.authToken}	
			}


			$http(httpObj)
			.success(function(data, status, headers, config){
				$scope.response = data;
				$scope.responseCode = status;
				$scope.responseClass = "endpoint__response-code--success";
			})
			.error(function(data, status, headers, config){
				$scope.response = data;
				$scope.responseCode = status;
				$scope.responseClass = "endpoint__response-code--error";
			});

			}
		}

	}
});
