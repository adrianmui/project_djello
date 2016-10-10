app.factory('TaskService',
  ['Restangular', '_',
  function(Restangular, _) {
  var _tasks;


  var stub = {};

  stub.load = function() {
    return Restangular.all('tasks').getList()
      .then(function(response) {
        _tasks = response;
        console.log('tasks loaded');
      })
  };

  stub.getAll = function() {
    return _tasks;
  };

  //get tasks from single list
  stub.get = function(list_id) {
    return _.where(_tasks, {user_id: parseInt(list_id)});     
  };

  stub.find = function(task_id) { 
    return _.find(_tasks, {id: parseInt(board_id)});
  };

  stub.edit = function(task, taskParams) {
    return Restangular.one("tasks", task.id).patch(taskParams)
      .then(function(response) {
        console.log(response);
        _.extend(_.findWhere(_tasks, { id: response.id }), response);
        console.log("changing edited task..");
      });
  };

  stub.create = function(taskParams) {
    return Restangular.all("tasks").post(taskParams)
      .then(function(response) {
        _tasks.push(response);
        console.log("added new task");
      });
  };

  stub.destroy = function(task) {
    return task.remove().then(function(response) {
      var unwanted = _.find(_tasks, {id: task.id});
      _tasks = _.without(_tasks, unwanted);
      console.log("task destroyed");
    })
  };
  

  //gets tasks with current user

  return stub;
}]);