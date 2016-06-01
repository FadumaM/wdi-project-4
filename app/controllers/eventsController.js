var rp = require('request-promise');


var MEETUP_URL = "https://api.meetup.com/2/groups";
var EVENTFUL_URL = "http://api.eventful.com/json/events/search";

function getMeetUpEvents(req, res) {
  var options = {
    uri: 'https://api.meetup.com/2/groups',
    qs: {
      key: process.env.MEETUP_API_KEY,
      topic: req.body.hobby,
      latitude: "51.5074",
      longitude: "0.1278"
    },
    json: true
  };

  return rp(options)
    .then(function(response) {
      res.status(200).send(response);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
}


module.exports = {
  meetup : getMeetUpEvents
};
