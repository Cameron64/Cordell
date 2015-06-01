angular.module('cole').controller('gallary', function($scope,$http) {

    $http.get('heads.json').then(function (res) {
        $scope.heads = res.data;

    });
});