angular.module("app").directive("titleDirective", function () {
	return {
		templateUrl: "view/title.html",
		scope: {
			title: "@"
		},
		transclude: true
	};
});