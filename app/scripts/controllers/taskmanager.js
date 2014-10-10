'use strict';

/**
 * @ngdoc function
 * @name taskManagerApp.controller:TaskmanagerCtrl
 * @description
 * # TaskmanagerCtrl
 * Controller of the taskManagerApp
 */
angular.module('taskManagerApp')
    .controller('TaskmanagerCtrl', function($scope, $filter, localStorageService) {
        var tasksInStore = localStorageService.get('storedTasks');
        var orderBy = $filter('orderBy');
        $scope.defaultVal = function() {
            var d = new Date().setHours(0, 1);
            return {
                checked: false,
                taskTitle: '',
                datetime: d,
                division: $scope.divOptions[0],
                cost: 0.5,
                record: null,
                number: null,
                project: $scope.taskTypes[0]
            };
        };

        $scope.resetVal = function() {
            var tmpTask = {
                checked: false,
                taskTitle: '',
                datetime: $scope.newTask.datetime,
                division: $scope.newTask.division,
                cost: $scope.newTask.cost,
                record: null,
                number: $scope.newTask.number,
                project: $scope.newTask.project
            };

            return tmpTask;
        };

        $scope.tasks = tasksInStore || [];
        $scope.$watch('tasks', function() {
            localStorageService.add('storedTasks', $scope.tasks);
        }, true);
        $scope.taskTypes = [{
                name: 'タスク',
                className: 'task'
            }, {
                name: 'ルーチン',
                className: 'routine'
            }, {
                name: '休憩',
                className: 'break'
            }, {
                name: '緊急',
                className: 'urgent'
            }, {
                name: '準備',
                className: 'preparation'
            }, {
                name: 'スキルUP',
                className: 'skillUp'
            }, {
                name: '区切り',
                className: 'border'
            },

        ];
        $scope.divOptions = ['A', 'B', 'C', 'D', 'E'];

        $scope.rowClass = function(val) {
            if (val.checked) {
                return 'done';
            }
            return val.project.className;
        };

        $scope.newTask = $scope.defaultVal();


        $scope.addTask = function() {
            $scope.tasks.push($scope.newTask);
            $scope.newTask = $scope.resetVal();
            $scope.order(['datetime', 'number'], false);
        };
        $scope.removeTask = function(index) {
            $scope.tasks.splice(index, 1);
        };

        $scope.order = function(predicate, reverse) {
            $scope.tasks = orderBy($scope.tasks, predicate, reverse);
        };
        $scope.order(['datetime', 'number'], false);



    });