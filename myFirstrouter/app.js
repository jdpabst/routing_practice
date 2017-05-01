angular.module('app', ["ui.router"])
// call-back function:
   .config(function($stateProvider, $urlRouterProvider) {
      
      $stateProvider
        .state('home', {
            url: '/',
            template: '<h1>This is the home page</h1>'
        })
        .state('about', {
            url: '/about',
            template: '<h1>This is the about page</h1>'
        })
        .state('roster', {
            url: '/roster',
            templateUrl: 'roster/roster.html',
            controller: 'rosterCtrl'
        })
        .state('player', {
            // :id - expect to see player's id after player/ 
            url: '/player/:id',
            templateUrl: 'player/player.html',
            controller: 'playerCtrl'

        })
   })