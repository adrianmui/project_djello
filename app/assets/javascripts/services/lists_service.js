app.factory('ListService',
  ['Restangular', '_',
  function(Restangular) {
  var _list;


  var stub = {};

  stub.load = function() {
    return Restangular.all('lists').getList()
      .then(function(response) {
        _lists = response;
        console.log('lists loaded');
      })
  };

  stub.getAll = function() {
    return _lists;
  };

  stub.get = function(board_id) {
    return _.where(_lists, {board_id: parseInt(board_id)});  
  };

  stub.find = function(list_id) {
    return _.find(_lists, {id: parseInt(board_id)});
  }

  //gets lists with current user

  return stub;
}]);