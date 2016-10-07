app.controller('ListIndexCtrl',
  ['$scope', '$stateParams', 'boards', 'ListService', 'currUser', 'ModalService',
  function($scope, $stateParams, boards, ListService, currUser, ModalService) {
    $scope.currentUser = currUser;

    console.log("still logged in through: ", 
      $scope.currentUser);
    console.log('you are in list index controller');

    $scope.lists = ListService.get($stateParams.id);
    
    console.log("lists: ", $scope.lists);    

   $scope.show = function() {

    ModalService.showModal({
      templateUrl: "templates/modal.html",
      controller: "ModalController",
    }).then(function(modal) {
      modal.element.show();
      modal.close.then(function(result) {
        $scope.message = "You said " + result;
      });
    });

  };

    
}]);

app.controller('ModalController', function($scope, close) {

  console.log("huehue");
  
 $scope.close = function(result) {
  close(result, 10000); // close, but give 500ms for bootstrap to animate
 };

});


