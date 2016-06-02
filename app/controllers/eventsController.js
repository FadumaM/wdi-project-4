var rp = require('request-promise');


var MEETUP_URL = "https://api.meetup.com/2/groups";
var EVENTFUL_URL = "http://api.eventful.com/json/events/search";


function getMeetUpEvents(req, res) {
  console.log(req.body.name);
  var options = {
    uri: 'https://api.meetup.com/2/groups',
    qs: {
      key: process.env.MEETUP_API_KEY,
      topic: req.body.name,
      lat: "51.50015",
      lon: "-0.126236",
      location: "london"
    },
    json: true
  };

  return rp(options)
    .then(function(response) {

      return res.status(200).send(response);
    })
    .catch(function(err) {
      res.status(500).send(err);
    });
}


module.exports = {
  meetup : getMeetUpEvents
};
