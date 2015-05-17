angular.module('cole').controller('gallary', function($scope,$http) {

    $scope.pictures = [];
    $http.get('pictureInfo.json').then(function (res) {
        $scope.pictures = res.data;
    });
    $http.get('heads.json').then(function (res) {
        $scope.heads = res.data;
    });


});