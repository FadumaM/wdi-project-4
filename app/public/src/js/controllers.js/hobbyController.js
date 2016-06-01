angular
    .module('Hobbyist')
    .controller('HobbyController', HobbyController);

    HobbyController.$inject = ['Hobby', 'Statement', 'Category','$stateParams'];



    function HobbyController(Hobby, Statement, Category, $stateParams) {
      // Binding this
      self      = this;
      self.firstTwoHobbies       =  [];
      self.secondTwoHobbies      =  [];
      self.savedHobbies           =  [];
      self.saveFirstHobby         = saveFirstHobby;
      self.saveSecondHobby        = saveSecondHobby;
      self.saveFinalHobby         = saveFinalHobby ;
      self.firstHobby             = null;
      self.secondHobby            = null;
      self.chosenHobby            = null;

      Hobby.query(function(response) {
        for (i = 0; i < response.length; i++) {
            if (response[i].category === $stateParams.id){
              self.filterHobbies = response[i];
                self.firstTwoHobbies.push(self.filterHobbies);
            }
        }
        self.secondTwoHobbies = self.firstTwoHobbies.splice(0, 2);
      });

      function saveFirstHobby(hobby) {
        self.firstHobby = hobby;
        self.savedHobbies.push(self.firstHobby);
        console.log(self.savedHobbies);
      }
      function saveSecondHobby(hobby) {
        self.secondHobby = hobby;
        self.savedHobbies.push(self.secondHobby);
        console.log(self.savedHobbies);
      }

      function saveFinalHobby(hobby) {
        self.chosenHobby = hobby;
      }
    }
