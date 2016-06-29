'use strict';

angular.module('fslashcardApp', []);
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('category', {
    url           : '/category' ,
    templateUrl   : '/crud/category.html' ,
    controller    : 'categoryCtrl'
  })
  .state('browseCategory', {
    url           : '/browse' ,
    templateUrl   : '/crud/browseCategory.html' ,
    controller    : 'browseCategoryCtrl'
  });
  .state('add', {
    url           : '/add' ,
    templateUrl   : '/crud/add.html' ,
    controller    : 'addCtrl'
  })
  .state('edit', {
    url           : '/edit' ,
    templateUrl   : '/crud/edit.html' ,
    controller    : 'editCtrl'
  })
  $urlRouterProvider.otherwise('/');
});
