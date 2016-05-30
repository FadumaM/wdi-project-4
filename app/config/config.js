module.exports = {
    database: process.env.MONGODB_URI || "mongodb://localhost:27017/hobbyist",
    port: process.env.PORT || 3000,
    secret:   process.env.SECRET || "Mynameiswhatever124373743&&&&&&4dhdjsk",
    appUrl: 'http://localhost:3000',
    oauth: {
    facebook: {
      accessTokenUrl: 'https://graph.facebook.com/v2.5/oauth/access_token',
      profileUrl: 'https://graph.facebook.com/v2.5/me?fields=id,email,name,picture'
    },
    twitter: {
      requestTokenUrl: 'https://api.twitter.com/oauth/request_token',
      accessTokenUrl: 'https://api.twitter.com/oauth/access_token',
      profileUrl: 'https://api.twitter.com/1.1/users/show.json'
    }
  }
};