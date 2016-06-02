angular
    .module('Hobbyist')
    .controller('EventsController', EventsController);

    EventsController.$inject= [ '$http', '$stateParams', 'Hobby'];
    function EventsController( $http, $stateParams, Hobby) {
      console.log("EVENTS INSTANTIATED!");
      var self = this;
      self.filteredEvents = [];
      self.getEvents = getEvents;

      function getEvents(){
        $http
        .get('http://localhost:3000/api/hobby/' + $stateParams.id)
        .then(function(response) {
          var hobby = response.data.name;
          console.log("HOBBY!", hobby);
          return $http.post('http://localhost:3000/api/events/meetup/' + hobby);
        })
        .then(function(response) {
          console.log(response.data);
          // for(i = 0; i < 20; i++){
          //   console.log("This is the response data:",response.data.results[i]);
          //   // self.filteredEvents.push(response.data.results[i]);
          //   //  console.log("Inside the loop",self.filteredEvents);
          // }
          // console.log("Outside the loop",self.filteredEvents);

        });
      }

      getEvents();

    }
