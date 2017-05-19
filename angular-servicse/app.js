var app=angular.module("myapp",[]);
app.provider("myProvider",function(){
		var obj={};
		obj.name="asha";
		obj.getname=function(){
			return this.name;
		}
		this.$get=function(){
		return  obj;
	}
})



app.config(["myProviderProvider","appname",function(myProvider,appname){
	console.log(myProvider.$get().name);
	console.log(myProvider.$get().getname());
	appname="asha";
	console.log("this is my config"+appname);
}])

app.run(["customservice","appname","appversion",function(customservice,appname,appversion){
	console.log(customservice.getCustomerDetails());
	appname="asha in run";
	console.log("this is my config"+appname);
	appversion="2.0.0.1";
	console.log("this is my config"+appversion);
}])

//app.controller("mycontroller",["$scope","myProvider",function($scope,myProvider){
	//console.log("my controller-provider:"+ myProvider.name)
//}])
app.controller("mycontroller",["$scope","customservice","customFactory","appname",function($scope,customservice,customFactory,appname){
	console.log("my controller-provider:"+customservice.getCustomerDetails())
	$scope.msg=customservice.getCustomerDetails();
	$scope.msg1=customFactory;
	console.log(appname);
}])
