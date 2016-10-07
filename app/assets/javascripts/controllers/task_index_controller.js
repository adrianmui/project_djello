app.controller('TaskIndexCtrl',
  ['$scope', '$stateParams', 'boards', 'TaskService', 'currUser',
  function($scope, $stateParams, boards, TaskService, currUser) {
    $scope.currentUser = currUser;

    console.log("still logged in through: ", 
      $scope.currentUser);
    console.log('you are in list index controller');

    
    $scope.lists = TaskService.get($stateParams.id);
    
    console.log("lists: ", $scope.lists);    
    
}]);


