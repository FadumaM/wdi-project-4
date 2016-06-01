angular
    .module('Hobbyist')
    .controller('EventsController', EventsController);

    EventsController.$inject= ['$http', 'API_URL'];
    function EventsController ($http, API_URL) {

      $http.post();

    }
