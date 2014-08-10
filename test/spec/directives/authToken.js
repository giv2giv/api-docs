'use strict';

describe('Directive: authToken', function () {
  beforeEach(module('docs.giv2giv.orgApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<auth-token></auth-token>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the authToken directive');
  }));
});
