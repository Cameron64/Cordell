(function () {

    angular.module('cole', ['ngRoute','ngAnimate']).

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
        }).

    directive('carousel', function(){
        return{
            restrict: 'E',
            templateUrl: 'Directives/slider.html',
            controller: function($scope){
                $scope.album = [
                    { image: "pics/121.jpg",
                        description: "High School Musical Theatre Awards" },
                    { image: "pics/122.png",
                        description: "Can I Borrow Your Phone" },
                    { image: "pics/IMG_7200.jpg",
                        description: "On Stage-Hebron High"}
                ];
                $scope.direction = 'left';
                $scope.currentIndex = 0;

                $scope.setCurrentSlideIndex = function
                    (index) {
                    $scope.direction = (index >
                        $scope.currentIndex) ? 'left' : 'right';
                    $scope.currentIndex = index;
                };

                $scope.isCurrentSlideIndex = function (index)
                {
                    return $scope.currentIndex === index;
                };

                $scope.prevSlide = function () {
                    $scope.direction = 'right';
                    $scope.currentIndex =
                        ($scope.currentIndex == 0) ? $scope.album.length - 1 : --$scope.currentIndex;

                };

                $scope.nextSlide = function () {
                    $scope.direction = 'left';
                    $scope.currentIndex =
                        ($scope.currentIndex < $scope.album.length - 1) ? ++$scope.currentIndex : 0 ;

                };

                $scope.fadeNavPanels = function(bool){
                    $scope.showNavPanels = bool;
                }

            }
        }

    }).

        animation('.slide-animation', function () {
            return {
                beforeAddClass: function (element, className, done) {
                    var scope = element.scope();
                    if (className == 'ng-hide') {
                        var finishPoint = element.parent().width();

                        if (scope.direction !== 'right') {
                            finishPoint = -finishPoint;
                        }
                        TweenMax.to(element, .25, { left: finishPoint, onComplete: done });
                    }
                    else {
                        done();
                    }
                },
                removeClass: function (element, className, done) {
                    var scope = element.scope();

                    if (className == 'ng-hide') {
                        element.removeClass('ng-hide');

                        var startPoint = element.parent().width();
                        if (scope.direction === 'right') {
                            startPoint = -startPoint;
                        }

                        TweenMax.fromTo(element, 0.25, { left: startPoint }, { left: 76, onComplete: done });
                    }
                    else {
                        done();
                    }
                }
            };
        });


})();