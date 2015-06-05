angular.module('cole').controller('theater', ['$scope','$http', function($scope,$http) {

    $http.get('pictureInfo.json').then(function (res) {
        $scope.pictures = res.data;

    });

}]);
