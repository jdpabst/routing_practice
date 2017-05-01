angular.module('app').controller('playerCtrl', function($scope, playerService,$stateParams){

// allows us to refer to the parameter before we know what it is going to be... $stateParams.id...
var playerId = $stateParams.id;

$scope.player = playerService.findPlayerById(playerId);

})