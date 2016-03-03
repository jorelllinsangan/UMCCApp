(function() {
  var app = angular.module('umcc', []);

  app.controller('WallController', ['$http', function($http) {
    var wall = this;
    wall.routes = {};
    $http.get('/problems').success(function(problems){
      wall.routes = problems;
    }).error(function(error){
      console.log(error);
    });
  }]);

  app.controller("RouteController", ['$http', function($http) {
    
    var route = this
    route.route = {};

    this.addRoute = function(wall) {
      wall.routes.push(this.route);
      $http.post('/problems', route.route).success(function(data) {
        console.log(data);
        route.route = {};
      }).error(function(error){
        console.log(error);
      });
      
    };
  }]);

  
})();