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

  console.log('you are in Side Menu controller');
  console.log('boards: ', boards);
  
  $scope.currentUser = currUser;

  $scope.boards = boards;

  $scope.deleteBoard = function(board_id) {

  };

  $scope.addBoard = function() {
    $scope.boardParams = {
      title: "newboard"
    };
    BoardService.create($scope.boardParams, currUser.id);
  };

  $scope.changeView = function(){
    $state.go('main.boards.show', {id: parseInt($scope.selectedBoard.id)});
    // $state.go('main.boards.show({id:' + parseInt($scope.selectedBoard.id) + '})'); // path not hash
  }

  

}]);


