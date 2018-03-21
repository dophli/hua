var app = angular.module("myApp",[]);
app.controller("ctrla",function($scope){//依赖注入
	$scope.sea= function(){
		open('1.html','_self');//弹出对应页面
	};
});