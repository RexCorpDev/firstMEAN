'use strict';

var app = angular.module('flashCard', [ 'ui.router', 'ui.bootstrap', 'oitozero.ngSweetAlert' ]);
app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url           : '/' ,
    templateUrl   : 'html/home.html' ,
    controller    : 'homeController'
  })
  .state('category', {
    url           : '/category' ,
    templateUrl   : 'html/category.html' ,
    controller    : 'categoryCtrl'
  })
  .state('study', {
    url           : '/study' ,
    templateUrl   : 'html/study.html'
  })
  .state('movies', {
    url           : '/study/movies/splash',
    templateUrl   : 'html/movies.html',
    controller    : 'moviesController'
  })
  .state('study-movies', {
    url           : '/study/movies',
    templateUrl   : 'html/study-movies.html',
    controller    : 'moviesController'
  })
  .state('add', {
    url           : '/add' ,
    templateUrl   : 'html/add.html' ,
    controller    : 'addController'
  })
  .state('edit', {
    url           : '/edit' ,
    templateUrl   : 'html/edit.html' ,
    controller    : 'editController'
  })
  .state('browseCategory', {
    url           : '/browse' ,
    templateUrl   : 'html/browseCategory.html' ,
    controller    : 'browseController'
  })
  // .state('studyMusic', {
  //   url           : '/studyMusic' ,
  //   templateUrl   : 'html/studyMusic.html' ,
  //   controller    : 'studyMusicCtrl'
  // })
  // .state('studyNumbers', {
  //   url           : '/studyNumbers' ,
  //   templateUrl   : 'html/studyNumbers.html' ,
  //   controller    : 'studyNumbersCtrl'
  // })
  // .state('studyRandom', {
  //   url           : '/studyRandom' ,
  //   templateUrl   : 'html/studyRandom.html' ,
  //   controller    : 'studyRandomCtrl'
  // })
  // .state('< name >', {
  //   url           : '< / >' ,
  //   templateUrl   : '< / >' ,
  //   controller    : '< / >' ,
  //   resolve       : ' { < CONTROLLER PROP. NAME > : function( < PARAMS > ){ return < SERVICE NAME.METHOD( <PARAMS> ) > } }'
  // })








  ; // END OF .state(s)

  $urlRouterProvider.otherwise('/');
});
