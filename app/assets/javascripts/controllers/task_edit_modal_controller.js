app.controller('TaskEditModalController',
    function($scope, close, task, TaskService, ListService) {


  console.log("you have entered Edit TaskModal");

  $scope.task = task();
  $scope.listName = ListService().find($scope.task.list_id).title;
  $scope.taskParams = {
    title: $scope.task.title,
    description: $scope.task.description,
    votes: parseInt($scope.task.votes),
    completed: $scope.task.completed
  };

  $scope.close = function(option) {
    // this is where you submit
    // $scope.taskParams.completed = ($scope.taskParams.completed === true);
    if (option === 'Yes') {
      TaskService().edit($scope.task, $scope.taskParams);
    }

    close($scope.taskParams, 100);
  };
  
 $scope.cancel = function() {
  $element.modal('hide');
  close($scope.taskParams,100);
 };
});