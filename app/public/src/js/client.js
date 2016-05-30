angular
  .module('Hobbyist', ['angular-jwt', 'ngResource', 'satellizer','ui.router'])
  .constant('API_URL', 'http://localhost:3000/api')
  .constant('facebookClientId', '1812062232347280')
  .config(MainRouter)
  .config(oauthConfig)
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

    oauthConfig.$inject = ['API_URL', '$authProvider', 'facebookClientId'];
    function oauthConfig(API_URL, $authProvider, facebookClientId) {
      $authProvider.facebook({
        url: API_URL + '/auth/facebook',
        clientId: facebookClientId // replace with your facebook client id
      });
    }
