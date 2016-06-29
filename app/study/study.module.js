'use strict';

angular.module('flashCardApp.studyModule')
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('movies', {
    url           : '/study/movies' ,
    templateUrl   : '/study/study.movies.html' ,
    controller    : 'moviesController',
    controllerAs  : 'moviesCtrl'
  })
  .state('music', {
    url           : '/study/music' ,
    templateUrl   : '/study/study.music.html' ,
    controller    : 'musicController',
    controllerAs  : 'musicCtrl'
  });
  .state('numbers', {
    url           : '/study/numbers' ,
    templateUrl   : '/study/study.numbers.html' ,
    controller    : 'numbersController',
    controllerAs  : 'numbersCtrl'
  })
  .state('random', {
    url           : '/study/random' ,
    templateUrl   : '/study/study.random.html' ,
    controller    : 'randomController',
    controllerAs  : 'randomCtrl'
  })
  .state('custom', {
    url           : '/study/custom' ,
    templateUrl   : '/study/study.custom.html' ,
    controller    : 'customController',
    controllerAs  : 'custom'
  })
  $urlRouterProvider.otherwise('/');
});
