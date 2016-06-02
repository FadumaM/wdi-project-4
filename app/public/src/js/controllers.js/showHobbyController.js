angular
    .module('Hobbyist')
    .controller('ShowHobbyController', ShowHobbyController);

    ShowHobbyController.$inject = ['User', 'Hobby', '$stateParams', 'CurrentUser'];
    function ShowHobbyController(User, Hobby, $stateParams, CurrentUser) {
      self = this;
      self.currentUser = CurrentUser.getUser();
      console.log("this is the params",$stateParams);
      Hobby.get({ id: $stateParams.id}, function(hobby) {
        self.hobby = hobby;
      });
      self.text = "hit";
      self.saveHobby = function() {
        console.log(self.currentUser);
        User.saveHobby({ user: self.currentUser, hobby: self.hobby},
          function(response) {
            console.log(response);
          });
        };
    }
