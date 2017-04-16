// Ìí¼Ó·þÎñ
app.config(['$routeProvider', function($routeProvider){
	$routeProvider
        .when('/a',{templateUrl:'view/news.html'})
        .when('/b',{templateUrl:'view/intro.html'})
        .when('/c',{templateUrl:'view/message.html'})
        .otherwise({redirectTo:'/a'});
    }]);