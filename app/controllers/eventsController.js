var rp = require('request-promise');


var MEETUP_URL   = "https://api.meetup.com/2/groups";
var EVENTFUL_URL = "http://api.eventful.com/json/events/search";
var EVENTBRITE   = "https://www.eventbriteapi.com/v3/events/search";

function getMeetUpEvents(req, res) {

  var options = {
    uri: MEETUP_URL,
    qs: {
      key: process.env.MEETUP_API_KEY,
      topic: req.params.name,
      lat: "51.50015",
      lon: "-0.126236",
      location: "london"
    },
    json: true
  };

  return rp(options)
    .then(function(response) {
      // console.log(response);
      return res.status(200).send(response);
    })
    .catch(function(err) {
      console.log("ERROR");
      if(err.error.code === 'no_topics') return res.sendStatus(404);
      return res.status(500).send(err);
    });
}

function getEventBriteEvents() {
  var options = {
    uri: EVENTBRITE,
    qs: {
        q          : req.params,
        sort_by    : "best",
        // venue.city : "london",
        categories : "hobbies"
    },
    headers: {
        'Authorization': 'Bearer YW3KJB6TGLCS7JPVRGZH'
    },
    json: true
  };
}

module.exports = {
  meetup     : getMeetUpEvents,
  eventbrite : getEventBriteEvents
};
