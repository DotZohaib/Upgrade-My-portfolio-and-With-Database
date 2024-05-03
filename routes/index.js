var express = require('express');
const passport = require('passport');
var router = express.Router();
let userModel = require("./users")
let localStratgy = require("passport-local");
passport.use(new localStratgy(userModel.authenticate()));


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { error: req.flash("error") });
});

router.get('/profile',isLoggedIn, function(req, res, next) {
  res.render('profile', { title: 'Express' });
});


router.post('/register', function(req, res){
  let userdata = new userModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password

  });
  userModel.register(userdata, req.body.password)
  .then(function(registereduser){
    passport.authenticate("local")(req, res, function(){
      res.redirect("/profile")
    })
  })
})



router.post("/login", passport.authenticate("local", {
  successRedirect: "/profile",
  failureRedirect: "/login",
  failureFlash: true // Corrected typo: 'failureFlash' instead of 'failureflash'
}), function(req, res) {} );


router.get('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/login');
  });
});

function isLoggedIn(req, res, next){
  if (req.isAuthenticated()){
    return next();
  }
  res.redirect("/")
}
module.exports = router;
