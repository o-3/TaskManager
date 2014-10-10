'use strict';

/**
 * @ngdoc function
 * @name taskManagerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the taskManagerApp
 */
angular.module('taskManagerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
