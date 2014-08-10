'use strict';

describe('Directive: apiDocs', function () {
  beforeEach(module('docs.giv2giv.orgApp'));

  var element;

  it('should make hidden element visible', inject(function ($rootScope, $compile) {
    element = angular.element('<api-docs></api-docs>');
    element = $compile(element)($rootScope);
    expect(element.text()).toBe('this is the apiDocs directive');
  }));
});
