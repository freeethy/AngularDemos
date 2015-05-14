'use strict'

angular.module('ngShowcaseApp')
.controller('ctrl.show',function($scope){
	var vm = $scope.vm = {};
})
.controller('ctrl.show.progress',function($scope){
	var vm = $scope.vm = {};
	vm.value = 50;
	vm.style = 'progress-bar-info';
	vm.showLabel = true;
})
.controller('ctrl.show.panel',function($scope){
	var vm = $scope.vm = {};
})
.controller('ctrl.show.tab',function($scope){
	var vm = $scope.vm = {};
})
.controller('ctrl.show.alert',function($scope){
	var vm = $scope.vm = {};
});