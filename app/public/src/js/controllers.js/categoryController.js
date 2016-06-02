angular
    .module('Hobbyist')
    .controller('CategoryController', CategoryController);

    CategoryController.$inject = ['Hobby', 'Statement', 'Category'];



    function CategoryController(Hobby, Statement, Category) {
      // //Binding this to self
      self                              = this;

      // //Narrow down Category

      self.firstFiveCategories          = [];
      self.secondFiveCategories         = [];
      self.saveFirstCategory            = saveFirstCategory;
      self.saveSecondCategory           = saveSecondCategory;
      self.saveFinalChosenCategory      = saveFinalChosenCategory;
      self.firstCategory                = null;
      self.secondCategory               = null;
      self.savedCategories              = [];
      self.chosenCategory               = null;

      Statement.query(function(response) {
      console.log(response);
      });



      Category.query(function(response) {
        self.firstFiveCategories= response;
        self.secondFiveCategories = self.firstFiveCategories.splice(0,5);
      });

      function saveFirstCategory(category) {
          self.firstCategory = category;
          self.savedCategories.push(self.firstCategory);
      }
      function saveSecondCategory(category) {
          self.secondCategory = category;
          self.savedCategories.push(self.secondCategory);


      }

      function saveFinalChosenCategory(category) {
        self.chosenCategory = category;

      }
    }
