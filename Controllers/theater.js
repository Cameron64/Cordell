angular.module('cole').controller('theater', function($scope,$http) {

    $http.get('pictureInfo.json').then(function (res) {
        $scope.pictures = res.data;

    });

});
