angular
    .module('Hobbyist')
    .controller('EventsController', EventsController);

    EventsController.$inject= ['$http', 'MEETUP_URL', 'API_KEY','EVENTBRITE'];
    function EventsController ($http, MEETUP_URL, API_KEY, EVENTBRITE) {

      self                 = this;
      self.getMeetUpEvents = getMeetUpEvents;

        function getMeetUpEvents() {
          $http
          .get(MEETUP_URL+'?&sign=true&photo-host=public&topic=running&zip=SW17%208SF&city=London&page=20&key='+ API_KEY)
          .then(function(response) {
             console.log(response.data);
          });
        }

        function getEventFull() {
          $http
          .get(EVENTFUL + '?&keywords=running&location=london&date=Future')
          .then(function (response) {

          });
        }
    getMeetUpEvents();
  }
