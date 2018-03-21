jQuery(window).load(function() {
		jQuery('#slider').nivoSlider({
			effect: 'random',//有以下切换效果
			//sliceDownRight,sliceDownLeft,sliceUpRight,sliceUpLeft,sliceUpDown,sliceUpDownLeft
			//,fold,fade,boxRandom,boxRain,boxRainReverse,boxRainGrow,boxRainGrowReverse'
			slices:15,
			animSpeed:500, //Slide transition speed
			pauseTime:5000,
			controlNav: true,//数字点选
			directionNavHide: false,//默认隐藏左右按钮，鼠标指向图片上才显示
			prevText: '上一张',
			nextText: 'next',
			startSlide:0, //Set starting Slide (0 index)
			directionNav:true//, //Next &amp; Prev
		});	
	});	
	
		var app = angular.module("myApp",[]);	
//		获取后台数据
            app.controller("ctrla",function($scope,$http){//依赖注入
             	$http.get("http://127.0.0.1:8020/hua/json/hua.json").success(function(res){
             		$scope.obj= res.sorts.yongshenghua;
             	})
            });
            app.controller("ctrlb",function($scope,$http){//依赖注入
             	$http.get("http://127.0.0.1:8020/hua/json/hua.json").success(function(res){
             		$scope.obj= res.sorts.lipin;
             	})
            });
            app.controller("ctrlc",function($scope){//依赖注入
            	$scope.tog12=true;
            	$scope.tog21=true;
            	$scope.tog31=true;
            	$scope.tog41=true;
            	$scope.change1=function(){
             		$scope.tog11=false
             		$scope.tog12=true
             		$scope.tog21=true
             		$scope.tog22=false
             		$scope.tog31=true
             		$scope.tog32=false
             		$scope.tog41=true
             		$scope.tog42=false
             	}
             	$scope.change2=function(){
             		$scope.tog11=true
             		$scope.tog12=false
             		$scope.tog21=false
             		$scope.tog22=true
             		$scope.tog31=true
             		$scope.tog32=false
             		$scope.tog41=true
             		$scope.tog42=false
             	}
             	$scope.change3=function(){
             		$scope.tog11=true
             		$scope.tog12=false
             		$scope.tog21=true
             		$scope.tog22=false
             		$scope.tog31=false
             		$scope.tog32=true
             		$scope.tog41=true
             		$scope.tog42=false
             	}
             	$scope.change4=function(){
             		$scope.tog11=true
             		$scope.tog12=false
             		$scope.tog21=true
             		$scope.tog22=false
             		$scope.tog31=true
             		$scope.tog32=false
             		$scope.tog41=false
             		$scope.tog42=true
             	}
            });