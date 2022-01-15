angular.module("app").config(function ($routeProvider) {
	$routeProvider.when("/list", {
		templateUrl: "view/list.html",
		controller: "listController",
	});
	$routeProvider.when("/details/:id", {
		templateUrl: "view/details.html",
		controller: "detailsController",
	});
	$routeProvider.otherwise({redirectTo: "/list"});
});
