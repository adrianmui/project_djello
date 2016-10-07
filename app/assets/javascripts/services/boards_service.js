app.factory('BoardService',
  ['Restangular', '_',
  function(Restangular) {
  var _boards;


  var stub = {};

  stub.load = function() {
    return Restangular.all('boards').getList()
      .then(function(response) {
        _boards = response;
        console.log('boards loaded');
      })
  };

  stub.getAll = function() {
    return _boards;
  };

  stub.get = function(user_id) {
    return _.where(_boards, {user_id: user_id});     
  };

  stub.find = function(board_id) {
    return _.find(_boards, {id: parseInt(board_id)});
  };

  stub.create = function(boardParams, user_id) {
    return Restangular.all('boards').post({
      title: boardParams.title,
      user_id: user_id
    }).then( function(response) {
      _boards.unshift(response);
    });
  };

  stub.edit = function(board, boardParams) {
    return Restangular.one("boards", board.id).patch(boardParams)
      .then(function(response) {
        // _.extend(_.findWhere(_tasks, { id: response.id }), response);
        console.log("changing edited board..");
      });
  };

  //gets boards with current user

  return stub;
}]);