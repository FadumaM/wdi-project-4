angular
  .module('Hobbyist')
  .service('TokenService', TokenService);

  TokenService.$inject = ["$window", "jwtHelper"];

  function TokenService($window, jwtHelper) {
    var self = this;

    self.setToken = setToken;
    self.getToken = getToken;
    self.removeToken = removeToken;
    self.decodeToken = decodeToken;

    function setToken(token){
      return $window.localStorage.setItem('auth-token', token);
    }

    function getToken(){
      return $window.localStorage.getItem('auth-token');
    }

    function removeToken(){
      return $window.localStorage.removeItem('auth-token');

    }

    function decodeToken(){
      console.log("decoding token");
      var token = self.getToken();
      console.log(token);
      if (token && token !== "null") {
        var decodedUser = jwtHelper.decodeToken(token);
      return token ? decodedUser._doc : null;
      }
    }
  }
