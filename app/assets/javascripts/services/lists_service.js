app.factory('ListService',
  ['Restangular', '_',
  function(Restangular, _) {
  var _lists;


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

  stub.destroy = function(list) {
    return list.remove().then(function(response) {
      var unwanted = _.find(_lists, {id: list.id});
      _lists = _.without(_lists, unwanted);
      console.log("list destroyed");
    })
  }

  stub.create = function() {

  };

  return stub;
}]);