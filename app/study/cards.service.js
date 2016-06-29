'use strict';




angular.module('flashCardApp.studyModule')
.service('Study', function($http){
  this.getCards     = ()    => $http.get    ('/api/cards/crud');

  this.feCards = {};

  this.setFeCards = dbCards => {
    this.feCards = dbCards;
  };
  this.getFeCards = () => this.feCards;
});
