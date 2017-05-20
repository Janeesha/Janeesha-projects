var app=angular.module("myapp",[]);
app.controller("mycontroller",["$scope",function($scope){
	$scope.msg="hi asha";
	$scope.company="techminds pvt ltd";
	$scope.userDetails=[{
		name:"asha",
		city:"bangalore"
	},
	{
	name:"janeesha",
		city:"mandya"
	},
	{
	name:"kumar",
		city:"mysore"
	},
	{
	name:"gowri",
		city:"maddur"
	}
	]
	$scope.changeCompanyName=function(){
		$scope.company="tech era";
	}
}])


app.directive("myBangaloreIsSuper",function(){
	return{
		restrict:"ECMA",
		templateUrl:'customer.html',
		replace:true,
		scope:{
			companyName:'@',
			userDetails:'=',
			change:'&'
		},
		compile:function(element,attributes){
			console.log("in compile !!!");
			console.log(element);
			console.log(attributes);
			return{
				pre: function(scope,elem,attr){
					console.log("in prelink")
					console.log(scope)
					console.log(elem)
					console.log(attr)


				},
				post: function(scope,elem,attr){
					console.log("in postlink")
					console.log(scope)
					console.log(elem)
					console.log(attr)

				}
			}
		}

	}
})
