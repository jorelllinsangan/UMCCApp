(function() {
	var app = angular.module('umcc', []);

	app.controller('ProblemController', function() {
		this.routes = [
			{
				name: "Trump Tower",
				grade: "12",
				description: "Red route on the left of the overhang.",
				setter: "Sean S."
			},
			{
				name: "Green Willy",
				grade: "11",
				description: "Green crimpy route on over hang. Start with crimp and pocket with a heel hook",
				setter: "Jorell L."
			}
		];
	});

	app.controller("RouteController", function() {
		this.route = {};

		this.addRoute = function(problem) {
			problem.routes.push(this.route);
			this.route = {};
		};
	});

	
})();