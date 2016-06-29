'use strict';

angular.module('flashCardApp.homeModule')
.controller('homeController', function($scope, Card){
  function getCards(){
    let movieCards = [],
    musicCards = [],
    numberCards = [],
    dbCards = {
      all : []
    };
    Card.getCards()
    .then(res => {
      res.data.forEach(card => {
        dbCards.all.push(card);
        card.category === 'Music' ? musicCards.push(card) :
        card.category === 'Movie' ? movieCards.push(card) :
        card.category === 'Number' ? numberCards.push(card) : null;
      });
      dbCards.movieCards = movieCards,
      dbCards.musicCards = musicCards,
      dbCards.numberCards = numberCards;
      Card.setFeCards(dbCards);
      console.log(Card.getFeCards());
    })
    .catch(() => $scope.cards = "you suck try again.");
  };

  getCards();

  $scope.$on('renderCards', function(){getCards()});
});
