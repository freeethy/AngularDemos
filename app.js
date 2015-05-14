'use strict'

var app = angular.module('ngShowcaseApp',['ui.router']);

app.config(function($stateProvider,$urlRouterProvider,NavData){
	/*$urlRouterProvider.when('','home/home');
	$urlRouterProvider.when('/','home/home');
	$urlRouterProvider.otherwise('/notFound');*/
	$stateProvider
		.state('about',{
			url:'/about',
			templateUrl:'templs/about.html'
		})
		.state('contact',{
			url:'/contact',
			templateUrl:'templs/contact.html'
		});
		/*.state('home',{
			url:'/home',
			templateUrl:'templs/home.html'
		})*/

	var states = {};
	// 把多级state弄成单级的，并自动补充父级路由，方便后续处理
	_.each(NavData,function(group){
		_.each(group.items,function(item){
			// 处理多级state，自动添加各个父级state
			var paths = item.state.split(/\./g);
			var currentPath = '';
			_.each(paths,function(path){
				currentPath+=path;
				states[currentPath] = item;
				currentPath+='.';
			});
		});
	});
	 // 遵循约定优于配置的原则自动批量注册路由
	_.each(states, function(item, state) {
	    var path = state.replace(/\./g, '/');
	    var lastState = state.match(/(\w+)$/)[0];
	    $stateProvider.state(state, {
	      url: '/' + lastState,
	      controller: 'ctrl.' + state,
	      templateUrl: 'templs/'+ 'home' +'.html',
	      label: item.label,
	      files: item.files,
	      description: item.description,
	      authors: item.authors,
	      progress: item.progress
	    });
	  });
});

app.controller('ctrl.home',function($scope){
	
});

app.directive('appnav',function(NavData){
	return{
		restrict:'EA',
		scope:{},
		replace:true,
		templateUrl:'templs/nav.html',
		link:function(scope,element,attrs){
			var vm = scope.vm = {};
			vm.data = NavData;
		}
	}
});
