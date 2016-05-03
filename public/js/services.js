'use strict';

var app = angular.module('flashCard');

app.service('Card', function($http, $q){


  this.getCardsByCategory = category => {
    return $http.get('/api/cards', category);
  };

  this.getCardById = id => {
    console.log("CardById\n", id);
    return $http.get('api/cards', id);
  };

  this.getCards = () => {
    return $http.get('/api/cards')
  };

  this.create = newCard => {
    console.log("Service new card\n", newCard);
    return $http.post('/api/cards', newCard);
  };

  this.delete = id => {
    console.log("Delete this:\n", id);
    return $http.delete(`/api/cards/${id}`);
  };

  this.edit = editedCard => {

    console.log("Edit this:\n",editedCard);

    return $http.put(`/api/cards/${editedCard._id}`, editedCard);
  }


});
