'use strict';

describe('Directive: param', function () {
  beforeEach(module('docs.giv2giv.orgApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<param></param>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the param directive');
  }));
});
