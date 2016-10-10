//Side Menu Controller will have different functions

// 1. creating and deleting boards
// 2. adding members to team
// 3. (opt)routing to view that shows Boards.all
// 4. (opt) show newsfeed/activity

app.controller('SideMenuCtrl',
  ['$scope', 'currUser', 'boards', 'BoardService', '$state',
  function($scope, currUser, boards, BoardService, $state) {
  
  $scope.boardParams = {};
  $scope.selectedBoard;

  // $scope.currentBoardIndex = function() {
  //   var currId = BoardService.getCurrBoard();
  //   if (currId) {
  //     return _.findIndex($scope.boards(), {id: currId.id()});
  //   } else {
  //     return 0;
  //   }
  // };

  console.log('you are in Side Menu controller');
  console.log('boards: ', boards);
  
  $scope.currentUser = currUser;

  $scope.boards = boards;

  // function() {
  //   return BoardService.getAll();
  // };

  $scope.deleteBoard = function() {
    BoardService.destroy($scope.selectedBoard);
    $state.go('main.boards');
    BoardService.getAll().then( function(response) {
      $scope.boards = response;
    })
  };

  $scope.addBoard = function() {
    $scope.boardParams = {
      title: "newboard"
    };
    BoardService.create($scope.boardParams, currUser.id).then( function(response) {
      $state.go('main.boards.show', {id: response.id});
    });
    
  };

  $scope.changeView = function(){
    BoardService.setCurrBoard($scope.selectedBoard);
    $state.go('main.boards.show', {id: parseInt($scope.selectedBoard.id)});
    // $state.go('main.boards.show({id:' + parseInt($scope.selectedBoard.id) + '})'); // path not hash
  }

  

}]);


