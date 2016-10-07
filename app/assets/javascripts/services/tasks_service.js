app.factory('TaskService',
  ['Restangular', '_',
  function(Restangular) {
  var _list;


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

  stub.get = function(list_id) {
    return _.where(_tasks, {user_id: parseInt(list_id)});     
  };

  stub.find = function(task_id) {
    return _.find(_tasks, {id: parseInt(board_id)});
  }

  //gets tasks with current user

  return stub;
}]);