myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      // location of the template
      templateUrl: 'views/index-view.html',
      // Which controller it should use 
      controller: 'myController',
      // what is the alias of that controller.
      controllerAs: 'epl'
    })
    .when('/match/:id1/:id2/:matchDate', {
      // location of the template
      templateUrl: 'views/matchDetails-view.html',
      // Which controller it should use 
      controller: 'matchDetails',
      // what is the alias of that controller.
      controllerAs: 'mD'
    })
    .when('/teams', {
      // location of the template
      templateUrl: 'views/teams-view.html',

    })
    .when('/teams16', {
      // location of the template
      templateUrl: 'views/team16-view.html',

    })
    .when('/1516/:a', {
      templateUrl: 'views/teamStats-view.html',
      // Which controller it should use 
      controller: 'teams',
      // what is the alias of that controller.
      controllerAs: 'team15'
    })
    .when('/1617/:b', {
      templateUrl: 'views/teamStats16-view.html',
      // Which controller it should use 
      controller: 'teams16',
      // what is the alias of that controller.
      controllerAs: 'team16'
    })

  .otherwise({
    redirectTo: '/'
  })

}]);

myApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);
