app.controller('ListIndexCtrl',
  ['$scope', '$stateParams', 'boards', 'ListService', 'currUser',
  function($scope, $stateParams, boards, ListService, currUser) {
    $scope.currentUser = currUser;

    console.log("still logged in through: ", 
      $scope.currentUser);
    console.log('you are in list index controller');

    
    $scope.lists = ListService.get($stateParams.id);
    
    console.log("lists: ", $scope.lists);    
    
}]);


