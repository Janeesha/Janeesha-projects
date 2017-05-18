var app = angular.module("myApp",['ngRoute']);

app.config(["$locationProvider", function($locationProvider){
	$locationProvider.hashPrefix('')
}])

app.config(["$routeProvider", function($routeProvider){
	
	$routeProvider
		.when("/home",{
			
			templateUrl: "pages/home.html",
			controller: "myHomeController"
		})
		.when("/register",{
			
			templateUrl : "pages/register.html",
			controller: "myRegisterController",
			
		})
		.when("/login", {
			templateUrl: "pages/login.html",
			controller:"myLoginController"
		})
}])
app.controller("myHomeController", ["$scope", function($scope){
	$scope.message = "This is my home controller";
}])

app.controller("myRegisterController", ["$scope", function($scope){
	$scope.message= "This is my register controller";
}])

app.controller("myLoginController", ["$scope", function($scope){
	$scope.message = "This is my login controller";
}])

