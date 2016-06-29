'use strict';

angular.module('flashCardApp.crudModule')
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('category', {
    url           : '/category' ,
    templateUrl   : 'html/category.html' ,
    controller    : 'categoryCtrl'
  })
  .state('browseCategory', {
    url           : '/browse' ,
    templateUrl   : 'html/browseCategory.html' ,
    controller    : 'browseCategoryCtrl'
  });
  .state('add', {
    url           : '/add' ,
    templateUrl   : 'html/add.html' ,
    controller    : 'addCtrl'
  })
  .state('edit', {
    url           : '/edit' ,
    templateUrl   : 'html/edit.html' ,
    controller    : 'editCtrl'
  })
  $urlRouterProvider.otherwise('/');
});
