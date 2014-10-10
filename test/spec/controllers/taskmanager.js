'use strict';

describe('Controller: TaskmanagerCtrl', function () {

  // load the controller's module
  beforeEach(module('taskManagerApp'));

  var TaskmanagerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TaskmanagerCtrl = $controller('TaskmanagerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
