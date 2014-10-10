'use strict';

/**
 * @ngdoc directive
 * @name taskManagerApp.directive:currentTime
 * @description
 * # currentTime
 */
angular.module('taskManagerApp')
    .directive('currentTime', ['$interval', 'dateFilter',
        function($interval, dateFilter) {

            function link(scope, element, attrs) {
                var format,
                    timeoutId;

                function updateTime() {
                    element.text(dateFilter(new Date(), format));
                }

                // scope.$watch(attrs.myCurrentTime, function(value) {
                //   format = value;
                //   updateTime();
                // });

                format = attrs.currentTime;

                element.on('$destroy', function() {
                    $interval.cancel(timeoutId);
                });

                // start the UI update process; save the timeoutId for canceling
                timeoutId = $interval(function() {
                    updateTime(); // update DOM
                }, 1000);
            }

            return {
                link: link
            };
        }
    ]);