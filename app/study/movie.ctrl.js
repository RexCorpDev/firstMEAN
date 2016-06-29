'use strict';

angular.module('flashCardApp.studyModule')
.controller('moviesController', function($scope, Study){ console.log('movieCtrl');
  $scope.answer     = false;
  let movieStudys   = Study.getFeCards().movieCards;
  let thisCard      = {};

  let generateCard = () => {
    let newCard = () => movieCards[Math.floor(Math.random()*movieCards.length)];
    thisCard = newCard();
    $scope.field = thisCard.question;
  }; generateCard();

  $scope.flipCard = () => {
    $scope.answer = true;
    $scope.field = thisCard.answer;
  };

  $scope.nextCard = () => {
    $scope.answer = false;
    generateCard();
  };
});
