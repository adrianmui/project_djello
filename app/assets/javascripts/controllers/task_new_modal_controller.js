app.controller('TaskNewModalController',
    function($scope, close, TaskService, listId) {


  console.log("you have entered New TaskModal");
  $scope.taskParams = {};

  $scope.close = function() {
    // this is where you submit
    $scope.taskParams.completed = ($scope.taskParams.completed === true);
    $scope.taskParams.list_id = listId();

    TaskService().create($scope.taskParams);

    close($scope.taskParams, 100);
  }
  
 $scope.cancel = function() {
  $element.modal('hide');
  close($scope.taskParams,100);
 }
});