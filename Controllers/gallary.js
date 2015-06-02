angular.module('cole').controller('gallary', ['$scope','$http', function($scope,$http) {

    $http.get('heads.json').then(function (res) {
        $scope.heads = res.data;

    });
}]);