'use strict';

var app = angular.module('flashCard');

app.service('Card', function($http){
  this.feCards = {};

  this.create = newCard => $http.post('/api/cards', newCard);

  this.getCards = () => $http.get('/api/cards');

  this.getCardById = id => $http.get('api/cards', id);

  this.getCardsByCategory = category => $http.get('/api/cards', category);

  this.delete = id =>$http.delete(`/api/cards/${id}`);

  this.edit = editedCard =>$http.put(`/api/cards/${editedCard._id}`, editedCard);

  // Front End Data Storage

  this.setFeCards = dbCards => {
    this.feCards = dbCards;
  };
  this.getFeCards = () => this.feCards;

});
