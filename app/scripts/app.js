'use strict';

angular.module('docs.giv2giv.orgApp', [])
.config(function($httpProvider){
	//$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	delete $httpProvider.defaults.headers.post['Content-type'];
	delete $httpProvider.defaults.headers.post['content-type'];
});
