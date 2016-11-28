var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

//Twilio
var twilio = require('twilio');

// Geocoder
var geocoder = require('geocoder');

// our db model1
var Status = require("../models/status.js");

// our db model2
var Meal = require("../models/meal.js");

/**
 * GET '/'
 * Default home route. Just relays a success message back.
 * @param  {Object} req
 * @return {Object} json
 */
router.get('/', function(req, res) {

  var jsonData = {
  	'name': 'node-express-twilio-sms',
  	'api-status':'OK',
    'instructions': "Text your meal to (678)-264-6646",
    'format': 'type,rating,place,location'
  }

  // respond with json data
  res.json(jsonData)
});



  var status = 'hello';



// Twilio callback route
// This gets called every time an incoming message is received
router.post('/twilio-callback', function(req,res){

  // the actual message is contained in req.body.Body
  var incomingMsg = req.body.Body;
  console.log(incomingMsg);
  // set up the twilio response
  var twilioResp = new twilio.TwimlResponse();


  var name;

  if (status === 'hello'){
    twilioResp.sms('Hello');
    twilioResp.sms('What is your name?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'name';
  } else if (status === 'name'){
    name = incomingMsg;
    twilioResp.sms('Hello there ' + incomingMsg);
    twilioResp.sms('What do you do for work?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'fun';
  } else if (status === 'fun'){
    twilioResp.sms('What about for fun?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'work_feel';
  } else if (status === 'work_feel'){
    twilioResp.sms('How do you feel about your work?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'work_feelwhy';
  } else if (status === 'work_feelwhy'){
    twilioResp.sms('Why?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'learning';
  } else if (status === 'learning'){
    twilioResp.sms('What are you learning at work?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'stuck';
  } else if (status === 'stuck'){
    twilioResp.sms('What makes you feel stuck?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'stuck_why';
  } else if (status === 'stuck_why'){
    twilioResp.sms('Why?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'satisfaction';
  } else if (status === 'satisfaction'){
    twilioResp.sms('What gives you the most satisfaction?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'sat_why';
  } else if (status === 'sat_why'){
    twilioResp.sms('Why?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'like';
  } else if (status === 'like'){
    twilioResp.sms("What don't you like?");
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'like_why';
  } else if (status === 'like_why'){
    twilioResp.sms('Why?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'doabout';
  } else if (status === 'doabout'){
    twilioResp.sms('What are you going to do about it?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'tried';
  } else if (status === 'tried'){
    twilioResp.sms('What else have you tried?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'goals';
  } else if (status === 'goals'){
    twilioResp.sms('What are your carrer goals?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'skills';
  } else if (status === 'skills'){
    twilioResp.sms('What are your skills?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'improveskills';
  } else if (status === 'improveskills'){
    twilioResp.sms('Which skills would you like to improve?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'howimprove';
  } else if (status === 'howimprove'){
    twilioResp.sms('How will you improve those skills?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'skillsproud';
  } else if (status === 'skillsproud'){
    twilioResp.sms('What skill are you most proud of?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'parents';
  } else if (status === 'parents'){
    twilioResp.sms('What did your parents want you to do?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'parentscurrent';
  } else if (status === 'parentscurrent'){
    twilioResp.sms('How would they feel about your current interestes?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'child';
  } else if (status === 'child'){
    twilioResp.sms('What did you enjoy most as a child?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'childfeelings';
  } else if (status === 'childfeelings'){
    twilioResp.sms('What gives you those feelings now?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'workfailure';
  } else if (status === 'workfailure'){
    twilioResp.sms('What was your last failure at work?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'workfailurelearn';
  } else if (status === 'workfailurelearn'){
    twilioResp.sms('What did you learn from your failure?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'oneyear';
  } else if (status === 'oneyear'){
    twilioResp.sms('What would you like to achieve in one year?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'fiveyears';
  } else if (status === 'fiveyears'){
    twilioResp.sms('What would you like to acheive in five years?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'tenyears';
  } else if (status === 'tenyears'){
    twilioResp.sms('What would you like to acheive in ten years?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'careerregret';
  } else if (status === 'careerregret'){
    twilioResp.sms('What career decision do you regret most so far?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'careerregretwhy';
  } else if (status === 'careerregretwhy'){
    twilioResp.sms('Why?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'decisionmaking';
  } else if (status === 'decisionmaking'){
    twilioResp.sms('Which impares your decsison-making process the most: Lack of confidence, impatience, the desire to please, or overexcitement?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'decisionmakingwhy';
  } else if (status === 'decisionmakingwhy'){
    twilioResp.sms('How do you think this has affected your career?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'worried';
  } else if (status === 'worried'){
    twilioResp.sms('What are you worried about?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'careerdevelop';
  } else if (status === 'careerdevelop'){
    twilioResp.sms('How do you expect your career will develop?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'notfail';
  } else if (status === 'notfail'){
    twilioResp.sms('What would you do if you knew you couldn\'t fail?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'enviousjob';
  } else if (status === 'enviousjob'){
    twilioResp.sms('Who was the last person whose job made you feel envious?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'enviousjobwhy';
  } else if (status === 'enviousjobwhy'){
    twilioResp.sms('What about it made you feel envious?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'bestat';
  } else if (status === 'bestat'){
    twilioResp.sms('Which of thse are you best at: Numbers, Words, Images, People?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'bestatuse';
  } else if (status === 'bestatuse'){
    twilioResp.sms('Which one do you use the most in your present job?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'thinktime';
  } else if (status === 'thinktime'){
    twilioResp.sms('How much time do you give yourself to think about your professional future?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'thinktimeenough';
  } else if (status === 'thinktimeenough'){
    twilioResp.sms('Do you think this is enough?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'failureafraid';
  } else if (status === 'failureafraid'){
    twilioResp.sms('What kind of failure are you most afraid of?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'jobqualities';
  }  else if (status === 'jobqualities'){
    twilioResp.sms('What qualities does your ideal job have?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'smallsteps';
  } else if (status === 'smallsteps'){
    twilioResp.sms('What small steps can you take to explore your interests this week?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'stepswhen';
  } else if (status === 'stepswhen'){
    twilioResp.sms('When will you do that?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'intprob';
  } else if (status === 'intprob'){
    twilioResp.sms('What do you think humankind\'s most interesting problems are?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'friendsthink';
  } else if (status === 'friendsthink'){
    twilioResp.sms('What do you friends think of your career goals?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
    status = 'notdeserve';
  } else if (status === 'notdeserve'){
    twilioResp.sms('Who or what made you feel as though you may not deserve success?');
    res.set('Content-Type', 'text/xml');
    res.send(twilioResp.toString());
  }

})

























// a different twilio callback, this one for our meals
router.post('/twilio-callback2', function(req,res){

  // there's lots contained in the body
  console.log(req.body);

  // the actual message is contained in req.body.Body
  var incomingMsg = req.body.Body;
  console.log(incomingMsg);


  // we don't want to save the entire body as one thing
  // we want to break it up into fields based on a structure of:
  // breakfast,3,My House,Brooklyn
  // which maps to:
  // type: breakfast
  // rating: 3,
  // place: My House
  // location: Brooklyn

  // the first thing we need to do is separate the big string into individual parts
  // we can do that by splitting at the commas
  var msgArray =  incomingMsg.split(',');

  // now it would look like [breakfast,3,My House,Brooklyn]
  console.log(msgArray);

  // now we can get the value
  var type = msgArray[0];
  var rating = msgArray[1];
  var place = msgArray[2];
  var location = msgArray[3];

  // set up our data
  var mealToSave = {
    type: type,
    rating: rating,
    place: place
  }

  // now, let's geocode the location
  geocoder.geocode(location, function (err,data) {

    // set up the twilio response
    var twilioResp = new twilio.TwimlResponse();

    // if we get an error, or don't have any results, respond back with error
    if (!data || data==null || err || data.status == 'ZERO_RESULTS'){
      // respond to user
      twilioResp.sms('Oops! We couldn\'t save meal.. couldn\'t find location -->'  + location);
      // respond to twilio
      res.set('Content-Type', 'text/xml');
      res.send(twilioResp.toString());
    }

    // else, let's pull put the lat lon from the results
    var lon = data.results[0].geometry.location.lng;
    var lat = data.results[0].geometry.location.lat;

    // now, let's add this to our animal object from above
    mealToSave.location = {
      geo: [lon,lat], // need to put the geo co-ordinates in a lng-lat array for saving
      name: data.results[0].formatted_address // the location name
    }

      var meal = new Meal(mealToSave)

      meal.save(function(err,data){
        if(err){
          // respond to user
          twilioResp.sms('Oops! We couldn\'t save meal --> ' + incomingMsg);
          // respond to twilio
          res.set('Content-Type', 'text/xml');
          res.send(twilioResp.toString());
        }
        else {
          // respond to user
          twilioResp.sms('Successfully saved meal! --> ' + incomingMsg);
          // respond to twilio
          res.set('Content-Type', 'text/xml');
          res.send(twilioResp.toString());
        }
      })


  });


})

router.get('/api/get',function(req,res){

  Status.find(function(err,data){
    if(err){
      var error = {
        status: "ERROR",
        message: err
      }
      res.json(error);
    }
    else {
      var jsonData = {
        status: "OK",
        statuses: data
      }
      res.json(jsonData);
    }
  })

})

router.get('/api/get/latest',function(req,res){

  Status.find().sort('-dateAdded').exec(function(err,data){
    if(err){
      var error = {
        status: "ERROR",
        message: err
      }
      res.json(error);
    }
    else {
      var jsonData = {
        status: "OK",
        status: data[0]
      }
      res.send(data[0].status);
    }
  })

})


router.get('/api/get/meals',function(req,res){

  Meal.find(function(err,data){
    if(err){
      var error = {
        status: "ERROR",
        message: err
      }
      res.json(error);
    }
    else {
      var jsonData = {
        status: "OK",
        meals: data
      }
      res.json(jsonData);
    }
  })

})



module.exports = router;
