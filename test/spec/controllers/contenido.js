'use strict';

describe('Controller: ContenidoCtrl', function () {

  // load the controller's module
  beforeEach(module('moodleAppApp'));

  var ContenidoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ContenidoCtrl = $controller('ContenidoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ContenidoCtrl.awesomeThings.length).toBe(3);
  });
});
