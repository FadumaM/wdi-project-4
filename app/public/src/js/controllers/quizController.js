angular
    .module('Hobbyist')
    .controller('QuizController', QuizController);

    QuizController.$inject = ['Hobby', 'Category', 'User'];

    function QuizController(Hobby, Category, User) {
      self                              = this;

      self.getCategory                  = getCategory;
      self.saveCategories               = saveCategories;
      self.saveFirstShownCategory       = saveFirstShownCategory;
      self.saveSecondShownCategory      = saveSecondShownCategory;
      self.saveFinalShownCategory       = saveSecondShownCategory;
      self.firstFiveCategories          = [];
      self.secondFiveCategories         = [];
      self.savedCategory                = [];
      self.firstQuestionCategory        = null;
      self.secondQuestionCategory       = null;
      self.shownCategory                = null;

      self.getHobby                     = getHobby;
      self.saveHobby                    = saveHobby;
      self.saveFirstShownHobby          = saveFirstShownHobby;
      self.saveSecondShownHobby         = saveSecondShownHobby;
      self.saveFinalShownHobby          = saveSecondShownHobby;
      self.filteredHobbies              = null;
      self.firstThreeHobbies            = [];
      self.secondThreeHobbies           = [];
      self.savedHobbies                 = [];
      self.firstQuestionHobby           = null;
      self.secondQuestionHobby          = null;
      self.shownHobby                   = null;

      self.saveHobbyToUser              = saveHobbyToUser;

      function getCategory() {
        Category.Query(function(response) {
          self.firstFiveCategories.push(response);
          self.secondFiveCategories = self.firstFiveCategories.splice(5,5);
          return [self.firstFiveCategories, self.secondFiveCategories];
        });
      }

      function saveFirstShownCategory(category) {
        self.firstQuestionCategory = category;
      }
      function saveSecondShownCategory(category) {
        self.secondQuestionCategory = category;
      }
      function saveFinalShownCategory(category) {
        self.shownCategory = category;

      }

      function pushCategories() {
        self.savedCategory.push(self.firstQuestionCategory, self.secondQuestionCategory);
      }


      function getHobby() {
        Hobby.Query(function(response) {
          if(response.category._id === shownCategory._id);{
            //then push those hobbies into the the filterdhobbies array
            self.filteredHobbies = result;
            self.firstThreeHobbies.push(self.filteredHobbies);
            self.secondThreeHobbies = self.firstThreeHobbies.splice(3,3);
          }
        });
      }

      function saveFirstShownHobby(hobby) {
        self.firstQuestionHobby = hobby;
      }
      function saveSecondShownHobby(hobby) {
        self.secondQuestionHobby = hobby;
      }
      function saveFinalShownHobby(hobby) {
        self.shownHobby = hobby;

      }

      function saveHobby () {
        self.savedHobbies.push(self.firstQuestionHobby, self.secondQuestionHobby);
      }

      function saveHobbyToUser() {
        User.saveHobby({});
        //self.currentUser._id = userID
        //self.shownHobby._id  = id
      }

    }
