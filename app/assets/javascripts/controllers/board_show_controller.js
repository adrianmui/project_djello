app.controller('BoardShowCtrl',
  ['$scope', '$stateParams', 'boards', 'BoardService', 'currUser', 'ListService',
  function($scope, $stateParams, boards, BoardService, currUser, ListService) {
  $scope.currentUser = currUser;

  console.log("still logged in through: ", 
    $scope.currentUser);
  console.log('you are in board show controller');

  $scope.board = BoardService.find($stateParams.id);

  // creates new list
  $scope.newList = function(data) {
    var listParams = {
      title: data,
      board_id: $scope.board.id
    };
    ListService.create(listParams);
  };

  //watches for change of board title name.
  $scope.$watch('board.title', function(newVal, oldVal) {
    if (newVal !== oldVal) {
      BoardService.edit($scope.board, {title: $scope.board.title})
    }
  });



    
}]);


