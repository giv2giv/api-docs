'use strict';

describe('Service: globalData', function () {

  // load the service's module
  beforeEach(module('docs.giv2giv.orgApp'));

  // instantiate service
  var globalData;
  beforeEach(inject(function (_globalData_) {
    globalData = _globalData_;
  }));

  it('should do something', function () {
    expect(!!globalData).toBe(true);
  });

});
