app.controller('ListIndexCtrl',
  ['$scope', '$stateParams', 'boards', 'ListService', 'TaskService', 'currUser', 'ModalService', 'TaskService',
  function($scope, $stateParams, boards, ListService, TaskService, currUser, ModalService, TaskService) {

  $scope.currentUser = currUser;
  console.log('you are in list index controller');

  $scope.lists = function() {
    return ListService.get($stateParams.id);
  };

  $scope.tasks = function() {
    return TaskService.getAll();
  };

  $scope.TaskParams = {};  

  $scope.deleteList = function(list) {
    ListService.destroy(list);
  };

  $scope.deleteTask = function(task) {
    TaskService.destroy(task);
  }

  $scope.showNewTaskModal = function(list_id) {
    ModalService.showModal({
      templateUrl: "templates/modals/tasks/new.html",
      controller: "TaskNewModalController",
      inputs: {
        TaskService: ['TaskService', function(TaskService) {
          return TaskService;
        }], 
        listId: function() {
          return list_id;
        }
      }
    }).then(function(modal) {    
      modal.element.show();
      modal.close.then(function(result) {
        $scope.TaskParams = result;
      });
    });

  };

  $scope.showEditTaskModal = function(task) {
    ModalService.showModal({
      templateUrl: "templates/modals/tasks/edit.html",
      controller: "TaskEditModalController",
      inputs: {
        task: function() {
          return task;
        },
        ListService: ['ListService', function(ListService) {
          return ListService;
        }],
        TaskService: ['TaskService', function(TaskService) {
          return TaskService;
        }]
      }
    }).then(function(modal) {    
      modal.element.show();
      modal.close.then(function(result) {
        $scope.TaskParams = result;
      });
    });

  };

    
}]);


