'use strict';

var app = angular.module('flashCard', [ 'ui.router', 'ui.bootstrap', 'oitozero.ngSweetAlert' ]);

app.config(function($stateProvider, $urlRouterProvider){


  $stateProvider
  .state('home', {
    url           : '/' ,
    templateUrl   : 'html/home.html' ,
    controller    : 'homeCtrl'
  })
  .state('category', {
    url           : '/category' ,
    templateUrl   : 'html/category.html' ,
    controller    : 'categoryCtrl'
  })
  .state('studyCategory', {
    url           : '/studyCategory' ,
    templateUrl   : 'html/studyCategory.html' ,
    controller    : 'studyCategoryCtrl'
  })
  .state('studyMovies', {
    url           : '/studyMovies' ,
    templateUrl   : 'html/studyMovies.html' ,
    controller    : 'studyMoviesCtrl'
  })
  .state('movieStudy', {
    url           : '/movieStudy' ,
    templateUrl   : 'html/movieStudy.html' ,
    controller    : 'movieStudyCtrl'
  })
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
  .state('browseCategory', {
    url           : '/browseCategory' ,
    templateUrl   : 'html/browseCategory.html' ,
    controller    : 'browseCategoryCtrl'
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
