var app = angular.module('app', 
  ['ui.router', 'restangular', 'Devise', 'angularModalService', 'xeditable', 'lodash']
  );

angular.module('lodash', []).factory('_', ['$window', function($window) {
  return $window._;
}]);

app.run(function(editableOptions, editableThemes) {
  editableOptions.theme = 'default';
   editableThemes['default'].submitTpl = '<button type="submit" class="btn btn-md btn-outline-primary"> Submit</button>';
   editableThemes['default'].cancelTpl = '<button type="submit" class="btn btn-md btn-outline-danger "> Cancel</button>';
});

// CSRF support
app.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
}]);


app.config(['$stateProvider', '$urlRouterProvider', 'RestangularProvider',
function($stateProvider, $urlRouterProvider, RestangularProvider){

  // Restangular
  RestangularProvider.setBaseUrl('/api/v1');
  RestangularProvider.setRequestSuffix('.json');

  // $urlRouterProvider.otherwise('/main');

  $stateProvider
    // .state('djello', {
    //   abstract: true,
    //   url: '',
    //   templateUrl: '/templates/andur.html',
    // })
    .state('main', {
      url: '',
      
      views: {
        'main-view@': {
          templateUrl: '/templates/main-view.html',
          controller: 'MainCtrl'
        },
        'side-control': {
          templateUrl: '/templates/side-view.html',
          controller: 'SideMenuCtrl'
        }
      },
      resolve: {
        currUser: ['Auth', function(Auth) {
        return Auth.currentUser();
        }],
        boards: ['currUser','BoardService',  function(currUser, BoardService) {
          return BoardService.load()
            .then(function() {
              return BoardService.get(currUser.id);
            })
        }]
      }
    })
    .state('main.boards', {
      url: '/boards',
      views: {
        'main-view@': {
          templateUrl: 'templates/boards/index.html',
          controller: 'BoardIndexCtrl'
        }
      },
      resolve: {
        currUser:  ['Auth', function(Auth) {
        return Auth.currentUser();
        }],
        boards: ['currUser','BoardService',  function(currUser, BoardService) {
          return BoardService.load()
            .then(function() {
              return BoardService.get(currUser.id);
            })
        }]
      }
    })
    .state('main.boards.show', {
      url: '/:id',
      views: {
        'main-view@': {
          templateUrl: 'templates/boards/show.html',
          controller: 'BoardShowCtrl'
        },

        'stuff@main.boards.show': {
          templateUrl: 'templates/lists/index.html',
          controller: 'ListIndexCtrl'
        },
    
      },
      resolve: {
        boards: ['currUser','BoardService',  function(currUser, BoardService) {
          return BoardService.load()
            .then(function() {
              return BoardService.get(currUser.id);
            })
        }],
        lists: ['ListService' , function(ListService) {
          return ListService.load()
            .then(function() { 
              return ListService.getAll();
            })
        }],

        tasks: ['TaskService' , function(TaskService) {
          return TaskService.load()
            .then(function() { 
              return TaskService.getAll();
            })
        }]

      }
    })
}]);


app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
