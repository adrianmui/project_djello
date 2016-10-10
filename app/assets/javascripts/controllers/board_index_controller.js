app.controller('BoardIndexCtrl',
  ['$scope', '$stateParams', 'boards', 'BoardService', 'currUser',
  function($scope, $stateParams, boards, BoardService, currUser) {
    $scope.currentUser = currUser;

    console.log("still logged in through: ", 
      $scope.currentUser);
    console.log('you are in board controller');


    $scope.boards = function() {
      return BoardService.getAll();
    };
    
    
}]);


