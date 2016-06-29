'use strict';

angular.module('flashCardApp.crudModule')
.controller('addController', function($scope, Card, $state){  console.log('addCtrl');
  $scope.createCard = () => {
    var newCard = {
      difficulty  :   $scope.difficulty.selected,
      category    :   $scope.category.selected,
      question    :   $scope.question,
      answer      :   $scope.answer,
    };
    console.log("controllerNewCard",newCard);
    Card.create(newCard);
    $scope.difficulty.selected = "";
    $scope.category.selected = "";
    $scope.question = "";
    $scope.answer = "";
  };
  $scope.category = {
    options: [
      'Movie',
      'Music',
      'Number',
      'Random'
    ],
    selected: 'Movie'
  };
  $scope.difficulty = {
    options: [
      'Easy',
      'Medium',
      'Hard',
      'Very Hard'
    ],
    selected: 'Easy'
  };
});
