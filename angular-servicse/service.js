app.service("customservice",function(){
	this.getCustomerDetails=function(){
        return "this will return customer detail!!"
	}
})
app.factory("customFactory",function(){
	return "hell";
	
})

app.constant("appname","angular service");
app.value("appversion","1.0.0")