var app=angular.module("myapp",[]);
app.controller("mycontroller",["$scope",function($scope){
	$scope.msg="hi asha";
}])

app.directive("myBangaloreIsSuper",function(){
	return{
		restrict:"ECMA",
		template:"<html><body><p>janeesha</p></body></html>"
		
	}
})
