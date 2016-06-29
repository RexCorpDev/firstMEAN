// 'use strict';
//
// var app = angular.module('flashCard');
//
// app.service('crudCard', function($http){
//   this.feCards = {};
//
//   this.getCards = () => $http.get('/api/crud/cards');
//   this.getCardById = id => $http.get('api/crud/cards/', id);
//   this.create = newCard => $http.post('/api/crud/cards', newCard);
//   this.edit = editedCard =>$http.put(`/api/crud/cards/${editedCard._id}`, editedCard);
//   this.delete = id =>$http.delete(`/api/crud/cards/${id}`);
//
//
//
//   this.getCardsByCategory = category => $http.get('/api/crud/cards/', category);
//
//
//
//   // Front End Data Storage
//
//   this.setFeCards = dbCards => {
//     this.feCards = dbCards;
//   };
//   this.getFeCards = () => this.feCards;
//
// });
