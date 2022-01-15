angular.module("app").service("appService", function ($http, config) {
	this.getAll = function (urlCtrl) {
		return $http.get(`${config.baseUrl}${urlCtrl}`, { params: config.queryParams });
	};

    this.findOne = function (id,urlCtrl) {
		return $http.get(`${config.baseUrl}${urlCtrl}/${id}`, { params: config.queryParams });
	};
});