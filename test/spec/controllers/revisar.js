'use strict';

describe('Controller: RevisarCtrl', function () {

  // load the controller's module
  beforeEach(module('moodleAppApp'));

  var RevisarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RevisarCtrl = $controller('RevisarCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RevisarCtrl.awesomeThings.length).toBe(3);
  });
});
