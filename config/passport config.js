const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const fs = require('fs');
require('dotenv').config({path:"./variables.env"});


// Here the configurations related to passportjs's google strategy
// is defined.

passport.use(new GoogleStrategy({
   clientID : process.env.GOOGLE_CLIENT_ID,
   clientSecret : process.env.GOOGLE_CLIENT_SECRET,
   access_type: "offline",
   callbackURL: "/redirect"
},(accessToken,refreshToken,profile,done)=>{

   const data = {accessToken,refreshToken,profile};
   const userDetails = JSON.stringify(data,null,2)
   fs.writeFile('token.json',userDetails,(err)=>{
      if(err)
      {
         console.log(" Some error occured while writting token.json: " + err);
      }
      else {
         console.log("token.json created successfully");
      }
   })
   return done(null)
}))
