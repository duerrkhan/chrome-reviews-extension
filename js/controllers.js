app.controller('navigator', function ($scope) {

});

app.controller('main', function ($scope, $http) {
    $scope.business = "oyama-sausage-company-vancouver";
    $scope.yelpInfo = "";

    //all our function def's will be placed in a service/factory to handle GETs
    $scope.url = "http://52.32.37.243:3000/yelp?id=";
    $scope.yelpClick = function(e) {
        $http.get($scope.url + $scope.business).then(function(res){
            $scope.yelpInfo = res.data;
        });
    }
});