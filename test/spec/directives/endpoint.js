'use strict';

describe('Directive: endpoint', function () {
  beforeEach(module('docs.giv2giv.orgApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<endpoint></endpoint>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('Works');
  }));
});
