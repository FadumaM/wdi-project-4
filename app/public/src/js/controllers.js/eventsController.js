angular
    .module('Hobbyist')
    .controller('EventsController', EventsController);

    EventsController.$inject= [ '$http', '$stateParams', 'Hobby'];
    function EventsController( $http, $stateParams, Hobby) {
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
        self.all = response.data.results;
          for(i = 0; i <self.all.length ; i++){
         return self.all[i];
          }
        });
      }

      getEvents();

    }
