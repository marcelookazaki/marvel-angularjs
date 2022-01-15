angular.module("app").controller("listController", function ($scope, appService) {

    appService.getAll('/characters').then(function(response){
      $scope.results = response.data.data.results
    });

});
