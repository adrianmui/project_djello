app.controller('MainCtrl',
  ['$scope', 'currUser',
  function($scope, currUser) {
    console.log('you are in main controller');
    console.log(currUser);
    $scope.currentUser = currUser;
    console.log("andur debug: ", $scope.currentUser);
}]);


