angular.module("app").config(function ($routeProvider) {
	$routeProvider.when("/list", {
		templateUrl: "view/list.html",
		controller: "listController",
		// resolve: {
		// 	list: function (appService) {
		// 		return appService.getAll();
		// 	},
		// }
	});
	$routeProvider.when("/details/:id", {
		templateUrl: "view/details.html",
		controller: "detailsController",
		// resolve: {
		// 	contato: function (contatosAPI, $route) {
		// 		return contatosAPI.getContato($route.current.params.id);
		// 	}
		// }
	});
	$routeProvider.otherwise({redirectTo: "/list"});
});
