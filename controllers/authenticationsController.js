var passport = require("passport");
var User = require("../models/user");
var secret = require("../config/config").secret;
var config = require("../config/config");
var jwt = require("jsonwebtoken");
var rp  = require('request-promise');

// After the user logs in with facebook, facebook's server will send a request to this endpoint
// with a code and a client id, which we will use to get an access token
 function facebook(req, res){
  var params = {
    code: req.body.code,
    client_id: req.body.clientId,
    client_secret: config.oauth.facebook.secret,
    redirect_uri: config.appUrl + "/"
  };
  console.log(params);

  // step 1, we make a request to facebook for an access token
  rp.get({ url: config.oauth.facebook.accessTokenUrl, qs: params, json: true })
    .then(function(accessToken) {
      // step 2, we use the access token to get the user's profile data from facebook's api
      return rp.get({ url: config.oauth.facebook.profileUrl, qs: accessToken, json: true });
    })
    .then(function(profile) {
      // step 3, we try to find a user in our database by their email
      return User.findOne({ email: profile.email })
        .then(function(user) {
          // if we find the user, we set their facebookId and picture to their profile data
          if(user) {
            user.facebookId = profile.id;
            user.image = user.picture || profile.picture.data.url;
          }
          else {
            // otherwise, we create a new user record with the user's profile data from facebook
            user = new User({
              facebookId: profile.id,
              firstName: profile.name,
              image: profile.picture.data.url,
              email: profile.email
            });
          }
          // either way, we save the user record
          return user.save();
        });
      })
      .then(function(user) {
        // step 4, we create a JWT and send it back to our angular app
        var token = jwt.sign(user, config.secret, { expiresIn: '24h' });
        return res.send({ token: token });
      })
      .catch(function(err) {
        // we handle any errors here
        console.log(err);
        return res.status(500).json({ error: err });
      });
}

function register(req, res, next) {
    var localStrategy = passport.authenticate('local-signup', function(err, user, info) {
        console.log(err);
        if (err) return res.status(500).json(info);
        if (info) return res.status(401).json(info);
        if (!user) return res.status(401).json(info);

        // Choose what data to use as the information to store inside the JWT that will identify this user
        var payload = user;
        // Create a token to send back to the user
        var token = jwt.sign(payload, secret, {
            expiresIn: 60 * 60 * 24
        });

        // Send back the token to the front-end to store
        return res.status(200).json({
            success: true,
            message: "Thank you for authenticating",
            user: user,
            token: token
        });
    });

    return localStrategy(req, res, next);
}


function login(req, res, next) {
    User.findOne({
        "email": req.body.email
    }, function(err, user) {
        if (err) return res.status(500).json({
            message: "Something went wrong"
        });
        if (!user) return res.status(403).json({
            message: 'No user found.'
        });
        if (!user.validatePassword(req.body.password)) return res.status(403).json({
            message: 'Authentication failed.'
        });

        // Choose what data to use as the information to store inside the JWT that will identify this user
        var payload = user;
        // Create a token to send back to the user
        var token = jwt.sign(payload, secret, {
            expiresIn: 60 * 60 * 24
        });

        return res.status(200).json({
            success: true,
            message: 'Welcome!',
            user: user,
            token: token
        });
    });
}

module.exports = {
    login: login,
    register: register,
    facebook: facebook
};
