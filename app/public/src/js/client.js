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
        controller: "QuizController",
        controllerAs: "quiz"
      })
      .state('categoryFirstQuestion',{
        url: '/quiz/1',
        templateUrl: "/src/js/views/quiz/category/firstQuestion.html",
        controller: "QuizController",
        controllerAs: "quiz"
      })
      .state('categorySecondQuestion',{
        url: '/quiz/2',
        templateUrl: "/src/js/views/quiz/category/secondQuestion.html",
        controller: "QuizController",
        controllerAs: "quiz"
      })
      .state('categoryThirdQuestion',{
        url: '/quiz/3',
        templateUrl: "/src/js/views/quiz/category/thirdQuestion.html",
        controller: "QuizController",
        controllerAs: "quiz"
      })
      .state('hobbyFirstQuestion',{
        url: '/quiz/4',
        templateUrl: "/src/js/views/quiz/hobby/firstQuestion.html",
        controller: "QuizController",
        controllerAs: "quiz"
      })
      .state('hobbySecondQuestion',{
        url: '/quiz/5',
        templateUrl: "/src/js/views/quiz/hobby/secondQuestion.html",
        controller: "QuizController",
        controllerAs: "quiz"
      })
      .state('hobbyThirdQuestion',{
        url: '/quiz/6',
        templateUrl: "/src/js/views/quiz/hobby/thirdQuestion.html",
        controller: "QuizController",
        controllerAs: "quiz"
      })
      .state('showHobby',{
        url: '/hobby/show',
        templateUrl: "/src/js/views/quiz/hobby/show.html",
        controller: "QuizController",
        controllerAs: "quiz"
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
