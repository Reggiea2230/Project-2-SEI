const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//Require your User Model here!
const Nike = require('../models/user');
// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    // refer to the lesson plan from earlier today in order to set this up
    Nike.findOne({'googleId': profile.id}, function(err, nikeDocument){
      
      if(err) return cb(err);

      if(nikeDocument){
      
        return cb(null, nikeDocument)
      } else {
         
           const newNike = new Nike({
             name: profile.displayName,
             email: profile.emails[0].value,
             googleId: profile.id
           })

           newNike.save(function(err){
            if(err) return cb(err);
            return cb(null, newNike)

           });
      }
    });
  }
));
  


passport.serializeUser(function(nike, done) {
  done(null, nike.id);
});

passport.deserializeUser(function(id, done) {

  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user
    Nike.findById(id, function(err, nikeDocument){
      done(err, nikeDocument);

    })
});






