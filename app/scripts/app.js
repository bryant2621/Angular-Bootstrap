'use strict';

/**
 * @ngdoc overview
 * @name angularTestApp
 * @description
 * # angularTestApp
 *
 * Main module of the application.
 */
angular
  .module('angularTestApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'MenuModule'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider.state("index",{
      url: '/index',
      views: {
        '': {
          templateUrl: 'views/main.html'
        },
        'menu@index': {
          templateUrl: 'views/menu.html'
        },
        'content@index': {
          templateUrl: 'views/content.html'
        },
        'topbar@index': {
          templateUrl: 'views/topbar.html'
        }
      }      
    })
    .state("about",{
      url: '/about',
      templateUrl:'views/about.html'
    })
  })
  .run(function($rootScope){
    $rootScope.loginUser = null;
  });
