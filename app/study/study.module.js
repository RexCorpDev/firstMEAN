'use strict';

angular.module('flashCardApp.studyModule')
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('movies', {
    url           : '/study/movies' ,
    templateUrl   : 'html/study.movies.html' ,
    controller    : 'moviesController',
    controllerAs  : 'moviesCtrl'
  })
  .state('music', {
    url           : '/study/music' ,
    templateUrl   : 'html/study.music.html' ,
    controller    : 'musicController',
    controllerAs  : 'musicCtrl'
  });
  .state('numbers', {
    url           : '/study/numbers' ,
    templateUrl   : 'html/study.numbers.html' ,
    controller    : 'numbersController',
    controllerAs  : 'numbersCtrl'
  })
  .state('random', {
    url           : '/study/random' ,
    templateUrl   : 'html/study.random.html' ,
    controller    : 'randomController',
    controllerAs  : 'randomCtrl'
  })
  .state('custom', {
    url           : '/study/custom' ,
    templateUrl   : 'html/study.custom.html' ,
    controller    : 'customController',
    controllerAs  : 'custom'
  })
  $urlRouterProvider.otherwise('/');
});
