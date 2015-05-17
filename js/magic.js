(function () {

    angular.module('cole', ['ngRoute']).

        config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/notes', {
                templateUrl: 'index.html'
                })
                .when('/', {
                    templateUrl: 'Directives/main.html'
                })
                .when('/about', {
                    templateUrl: 'Directives/about.html'
                })
                .when('/resume', {
                    templateUrl: 'Directives/resume.htm'
                })
                .when('/contact', {
                    templateUrl: 'Directives/contact-info.html'
                })
                .otherwise({ redirectTo: '/' })
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