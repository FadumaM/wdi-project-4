angular
    .module('Hobbyist')
    .controller('EventsController', EventsController);

    EventsController.$inject= [ '$http', '$stateParams', 'Hobby'];
    function EventsController( $http, $stateParams, Hobby) {
      var self = this;
      self.filteredEvents = [];
      self.text      = "hi";
      self.getHobby  = getHobby;
      self.getEvents = getEvents;

      console.log("\nI AM THE EVENTS CONTROLLER: '" + self.text + "'");

      function getHobby(){
        $http
        .get('http://localhost:3000/api/hobby/' + $stateParams.id)
        .then(function(response) {
          // console.log(response);
          self.hobby = response.data;
        });
      }

      function getEvents(){
        $http
        .post('http://localhost:3000/api/events/meetup/', self.hobby)
        .then(function(response) {
          console.log(response.data);
          for(i = 0; i < 20; i++){
            console.log("This is the response data:''",response.data.results[i]);
            // self.filteredEvents.push(response.data.results[i]);
            //  console.log("Inside the loop",self.filteredEvents);
          }
          $(test).append("response.data.results[i]");
          console.log("Outside the loop",self.filteredEvents);

        });
      }
      getHobby();
      getEvents();

    }
