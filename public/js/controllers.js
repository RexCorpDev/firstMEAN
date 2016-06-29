'use strict';

var app = angular.module('flashCard');

app.controller('homeController', function($scope, Card){
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

app.controller('moviesController', function($scope, Card){ console.log('moviesController');
  $scope.answer = false;
  let movieCards = Card.getFeCards().movieCards;
  let thisCard = {};
  let generateCard = () => {
    let newCard = () => movieCards[Math.floor(Math.random()*movieCards.length)];
    thisCard = newCard();
    $scope.field = thisCard.question;
  };
  generateCard();

  $scope.flipCard = () => {
    $scope.answer = true;
    $scope.field = thisCard.answer;
  };

  $scope.nextCard = () => {
    $scope.answer = false;
    generateCard();
  };
});

app.controller('movieStudyCtrl', function($scope, $state, Card, SweetAlert){
  var cards = [];
  var movieCards = [];

  // Check Validity

  $scope.flipCard = (uCard) => {
    uCard.answer = $scope.well;
  };

  // $scope.flipCard = (uCard) => {
  //   uCard.answer = var answer;
  //   uCard.uChoice = var choice;
  //   if(answer === choice){
  //     uCard.totalStudy++;
  //     SweetAlert.swal("Good job!", "You!", "success");
  //     $scope.qCard = NewCard();
  //   } else {
  //     SweetAlert.swal({
  //       title: "Are you sure?",
  //       text: "You will not be able to recover this imaginary file!",
  //       type: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#DD6B55",
  //       confirmButtonText: "Yes, delete it!",
  //       cancelButtonText: "No, cancel plx!",
  //       closeOnConfirm: false,
  //       closeOnCancel: false },
  //       function(isConfirm){
  //         if (isConfirm) {
  //           SweetAlert.swal("Deleted!", "Your imaginary file has been deleted.", "success");
  //         } else {
  //           SweetAlert.swal("Cancelled", "Your imaginary file is safe :)", "error");
  //         }
  //       });
  //     }
  //   }
  // })

});

app.controller('studyMusicCtrl', function(){
  console.log('studyMusicCtrl');

  //$scope.<ARRAY> = [];
})

app.controller('studyNumbersCtrl', function(){
  console.log('studyNumbersCtrl');

  //$scope.<ARRAY> = [];
})

app.controller('studyRandomCtrl', function(){
  console.log('studyRandomCtrl');

  //$scope.<ARRAY> = [];
})

app.controller('addCtrl', function($scope, Card, $state){
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

app.controller('browseCategoryCtrl', function ($scope, Card, $state) {
  console.log("browseCategoryController");

  Card.getCards()
  .then(dbCards => {
    console.log(dbCards);
    $scope.cards = dbCards.data;
  });

  $scope.sortBy = order => {
    if($scope.sortOrder === order){
      $scope.sortOrder = -order;
    } else {
      $scope.sortOrder = order;
    };
  };
})

app.controller('editCtrl', function ($scope, Card, $state) {
  //console.log("editController");
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

angular.module('ui.bootstrap').controller('PopoverDemoCtrl', function ($scope, $sce) {
  $scope.dynamicPopover = {
    content: 'Question',
    templateUrl: 'myPopoverTemplate.html',
    title: 'Title'
  };
});
