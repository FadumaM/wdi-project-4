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
      })
      .state('quizHome',{
        url: '/quiz/home',
        templateUrl: "/src/js/views/quiz/home.html",
      })
      .state('categoryFirstQuestion',{
        url: '/quiz',
        templateUrl: "/src/js/views/quiz/category/firstQuestion.html",
        controller: "CategoryController",
        controllerAs: "quiz"
      })
      .state('hobbyFirstQuestion',{
        url: '/quiz/:id',
        templateUrl: "/src/js/views/quiz/hobby/firstQuestion.html",
        controller: "HobbyController",
        controllerAs: "quiz"
      })
      .state('showHobby',{
        url: '/hobby/:id',
        templateUrl: "/src/js/views/quiz/hobby/show.html",
        controller: "ShowHobbyController",
        controllerAs: "hobby"
      })
      .state('eventIndex',{
        url: '/events/:id',
        templateUrl: "/src/js/views/events/index.html",
        // controller: "EventsController",
        // controllerAs: "events"
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
