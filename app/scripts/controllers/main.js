'use strict';

/**
 * @ngdoc function
 * @name taskManagerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the taskManagerApp
 */
angular.module('taskManagerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
