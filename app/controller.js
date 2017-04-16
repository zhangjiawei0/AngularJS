app.constant("baseUrl", "http://localhost:2403/")
    // .controller("userCtrl",function($scope, $http, baseUrl){
    //     $scope.listUser = function () {
    //         $http.get(baseUrl+"user/").success(function (data) {
    //             $scope.user = data;
    //         });
    //     };
    //     $scope.incrementZan = function(){
           
    //     };
    //     $scope.listUser();
    // })

    .controller("fansCtrl",function($scope, $http, baseUrl){
        $scope.listFans = function () {
            $http.get(baseUrl+"fans/").success(function (data) {
                $scope.fans = data;
            });
        };
        $scope.listFans();
    })

    .controller("peopleCtrl", function ($scope, $http, baseUrl) {
        $scope.listPeople = function () {
            $http.get(baseUrl+"people/").success(function (data) {
                $scope.people = data;
            });
        };
        $scope.listPeople();
    })
    