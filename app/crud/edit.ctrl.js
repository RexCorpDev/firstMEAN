'use strict';

angular.module('flashCardApp.crudModule')
.controller('editCtrl', function ($scope, Card, $state) { console.log("editCtrl");
  $scope.isCollapsed = true;

  Card.getCards()
  .then(dbCards => {
    //console.log("getCards\n",dbCards);
    $scope.cards = dbCards.data;
  });

  $scope.sortBy = order => {
    if($scope.sortOrder === order){
      $scope.sortOrder = -order;
    } else {
      $scope.sortOrder = order;
    };
  };

  $scope.editCard = card => {
    var editedCard = {};
    console.log("old Card\n", card);
    //console.log("edit card\n", card);
    $scope.isCollapsed = false;
    $scope.editCategory = card.category;
    $scope.editQuestion = card.question;
    $scope.editAnswer = card.answer;
    $scope.editDifficulty = card.difficulty;


    $scope.submitEdit = () => {
      console.log(card._id);
      editedCard = {
        _id        :   card._id,
        category  :   $scope.editCategory,
        question  :   $scope.editQuestion,
        answer    :   $scope.editAnswer,
        difficulty:   $scope.editDifficulty
      };
      console.log("new Card", editedCard);

      Card.edit(editedCard);
      Card.getCards()
      .then(newCards => {
        console.log("here are the edited cards\n",newCards);
        $scope.cards = newCards.data;
      });


      $scope.editCategory = "";
      $scope.editQuestion = "";
      $scope.editAnswer = "";
      $scope.editDifficulty = "";
    }
  }

  $scope.cancelChanges = () => {
    $scope.editCategory = "";
    $scope.editQuestion = "";
    $scope.editAnswer = "";
    $scope.editDifficulty = "";
  }

  $scope.deleteCard = id => {
    Card.delete(id);
    Card.getCards()
    .then(newCards => {
      $scope.cards = newCards.data;
    });
  };
});
