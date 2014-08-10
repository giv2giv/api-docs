'use strict';

angular.module('docs.giv2giv.orgApp')
  .filter('upperCase', function () {
    return function (input) {
      return input.toUpperCase();
    };
  });
