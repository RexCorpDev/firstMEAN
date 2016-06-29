'use strict';

angular.module('flashCardApp.crudModule');
.controller('browseCategoryCtrl', function ($scope, Card, $state) { console.log("browseCtrl");
  Card.getCards()
  .then(dbCards =>$scope.cards = dbCards.data;

  $scope.sortBy = order => $scope.sortOrder === order ? $scope.sortOrder = -order : $scope.sortOrder = order;
});
