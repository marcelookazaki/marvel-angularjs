angular.module("app").controller("detailsController", function ($scope, $routeParams, appService) {

    appService.findOne($routeParams.id, '/characters').then(function(response){
      $scope.results = response.data.data.results
      for(const r of response.data.data.results){
        $scope.name = r.name
        $scope.comics = r.comics.items
        $scope.img = `${r.thumbnail.path}.${r.thumbnail.extension}`
        $scope.detail = r.urls.filter(function (u) { 
          if(u.type === 'detail'){
            return u
        }})
      }
    });

});

