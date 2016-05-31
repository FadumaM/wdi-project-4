angular
    .module('Hobbyist')
    .controller('QuizController', QuizController);

    QuizController.$inject = ['Hobby', 'Category', 'User'];

    function QuizController(Hobby, Category, User) {
      //Binding this to self
      self                              = this;

      //Narrow down Category
      self.getCategory                  = getCategory;
      self.saveCategories               = saveCategories;
      self.saveFinalChosenCategory      = saveFinalChosenCategory;
      self.firstFiveCategories          = [];
      self.secondFiveCategories         = [];
      self.savedCategory                = [];
      self.chosenCategory               = null;

      //Narrow down hobby
      self.getHobby                     = getHobby;
      self.saveHobby                    = saveHobby;
      self.saveFinalChosenHobby         = saveFinalChosenHobby;
      self.filteredHobbies              = null;
      self.firstThreeHobbies            = [];
      self.secondThreeHobbies           = [];
      self.savedHobbies                 = [];
      self.chosenHobby                  = null;

      // save hobby to user
      self.saveHobbyToUser              = saveHobbyToUser;


      function getCategory() {
        Category.Query(function(response) {
          self.firstFiveCategories.push(response);
          self.secondFiveCategories = self.firstFiveCategories.splice(5,5);
          return [self.firstFiveCategories, self.secondFiveCategories];
        });
      }

      function savedCategories(category) {
        self.savedCategory.push(category);
      }

      function saveFinalChosenCategory(category) {
        self.chosenCategory = category;

      }


      function getHobby() {
        Hobby.Query(function(response) {
          if(chosenCategory._id === response.category._id);{
            //then push those hobbies into the the filterdhobbies array
            self.filteredHobbies = result;
            self.firstThreeHobbies.push(self.filteredHobbies);
            self.secondThreeHobbies = self.firstThreeHobbies.splice(3,3);
            return [self.firstThreeHobbies , self.secondThreeHobbies ];
          }
        });
      }


      function saveHobby(hobby) {
        self.savedHobbies.push(hobby);
      }


      function saveFinalChosenHobby(hobby) {
        self.chosenHobby = hobby;
      }


      function saveHobbyToUser() {
        User.saveHobby({});
        //self.currentUser._id = userID
        //self.chosenHobby._id  = id
        //reset()
      }

      function reset() {
        self.firstFiveCategories          = [];
        self.secondFiveCategories         = [];
        self.savedCategory                = [];
        self.chosenCategory               = null;

        self.filteredHobbies              = null;
        self.firstThreeHobbies            = [];
        self.secondThreeHobbies           = [];
        self.savedHobbies                 = [];
        self.chosenHobby                  = null;

      }

    }
