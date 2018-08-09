//Add passport and strategie module
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//require mongoose
const mongoose= require('mongoose');
//add key.js file
const keys= require('../config/key');

//import our user model from mongoose
const User = mongoose.model('users');

passport.serializeUser((user,done)=> {
    //user.id is the mongoDB ID and not googleId
   done(null,user.id)
});

passport.deserializeUser((id, done)=>{
  User.findById(id)
      .then(user =>{
          done(null, user);
      });
});

//Configure passport with the right strategie
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy:true
    }, (accessToken, refreshToken, profile , done)=> {
            //find if this id exist already
            User.findOne({googleId: profile.id})
                .then((data) =>{
                    if(data){
                        //data exist already in mongoDB
                        console.log("user already exist")
                        done(null, data);
                    }else{
                        //save a new user
                        new User({googleId: profile.id})
                            .save()
                            .then(user => done(null,user))
                    }
                })
        })
);
