'use strict';

angular.module('flashCardApp.crudModule')
.service('Card', function($http){
  this.getCards     = ()          => $http.get    ('/api/crud/cards');
  this.getCardById  = id          => $http.get    ('api/crud/cards', id);
  this.create       = newCard     => $http.post   ('/api/crud/cards', newCard);
  this.edit         = editedCard  => $http.put    (`/api/crud/cards/${editedCard._id}`, editedCard);
  this.delete       = id          => $http.delete (`/api/crud/cards/${id}`);
});
