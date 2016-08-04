'use strict';

/**
* MenuModule Module
*
* Description
*/
var menuModeul = angular.module('MenuModule', []);
menuModeul.controller('MenuCtrl', ['$scope','$rootScope', 
	function($scope,$rootScope){
		$scope.menus=[
			{
				name: "基础信息管理" ,
				url: ""
			},
			{
				name: "技能管理" ,
				url: ""
			}
		]
}])