(function () {

    angular.module('cole', ['ngRoute']).

        config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/notes', {
                templateUrl: 'index.html'
                }).
                when('/', {
                    templateUrl: 'Directives/main.html'
                }).
                when('/about', {
                    templateUrl: 'Directives/about.html'
                }).
                when('/resume', {
                    templateUrl: 'Directives/resume.htm'
                }).
                when('/contact', {
                    templateUrl: 'Directives/contact-info.html'
                }).
                when('/gallary', {
                    templateUrl: 'Directives/gallary.html',
                    controller: 'gallary'
                }).
                when('/theater', {
                    templateUrl: 'Directives/theater.html',
                    controller: 'theater'
                }).
                when('/video', {
                    templateUrl: 'Directives/video.html'
                }).

                otherwise({ redirectTo: '/' })
        }]).



        directive('tabs', function () {
            return{
                restrict: 'E',
                templateUrl: 'Directives/tabs.html',
                controller: function ($scope) {

                    $scope.current = 1;

                    $scope.isSet = function (num) {

                        return $scope.current === num;

                    };

                    $scope.setTab = function (num) {

                        $scope.current = num;

                    };

                }
            };
        });


})();