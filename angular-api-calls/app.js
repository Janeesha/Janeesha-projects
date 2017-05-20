var app=angular.module("myapp",['ngResource']);
app.controller("mycontroller",["$scope","$http","$resource",function($scope,$http,$resource){
  
	$scope.msg="this is my angular api calls"
	$scope.getweatherDetais=function(){
	$resource("https://jsonplaceholder.typicode.com/posts/1")
		.get(function(data){
			console.log(data)
		}
		)

	}
}])