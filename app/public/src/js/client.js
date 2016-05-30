angular
  .module('Hobbyist', ['angular-jwt', 'ngResource', 'ui.router'])
  .constant('API', 'http://localhost:3000/api')
  .config(MainRouter)
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });


 console.log("loaded");
  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "/src/js/views/home.html"
      })
      .state('login', {
        url: "/login",
        templateUrl: "/src/js/views/authentication/login.html",
        controller: "UsersController",
        controllerAs: "user"
      })
      .state('register', {
        url: "/register",
        templateUrl: "/src/js/views/authentication/register.html",
        controller: "UsersController",
        controllerAs: "user"
      });

    $urlRouterProvider.otherwise("/");
  }
