'use strict';

/**
 * @ngdoc overview
 * @name taskManagerApp
 * @description
 * # taskManagerApp
 *
 * Main module of the application.
 */
angular
    .module('taskManagerApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap.datetimepicker',
        'LocalStorageModule'
    ])
    .config(['localStorageServiceProvider',
        function(localStorageServiceProvider) {
            localStorageServiceProvider.setPrefix('ls');
        }
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                redirectTo: '/taskmanager'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/taskmanager', {
                templateUrl: 'views/taskmanager.html',
                controller: 'TaskmanagerCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });