// ====================================================================================
// 1. Argument Definition: argv[2] to call the js file; argv[3] to take the command line
//=====================================================================================

var nodeJsFile = process.argv[2];

var itemToAskFor = process.argv[3];

//====================================================================================
// 2. Importing from twitter
// Write the code to grab the data from keys.js and store the keys in a variable

// ------- Declare and store variable to require from twitter -----
var Twit = require('twit');
// -------import keys from keys.ja -------------------------------
var keys = require('./keys');

// --------check whether keys have been imported properly
console.log(keys);

//====================================================================================
// 3. Declare and store twitter grab variable
// ------ Create a user constructor -------------------
var twitterClient = new Twit(keys);
// ------- Create the twitter search parameters object and declare it as a variable
var params = {
  screen_name : 'moven_tech',
  count : 20
}

// ===================================================================================
// 4. Use switch statements to alternate between four cases [(a) Getting tweets from my twitter]
// (b) Getting songs from spotify (c) Getting movies from OMDB and (d) Reading and displaying texts from a .txt file]

//----Declare and store a request variable------------- 
var request = require (request);
//----Declare and store a file system variable----------- 
var fs = require(fs); 

//-----Write code for the switch statement -----
switch(nodeJsFile){
  case 'my_tweets':
  my_tweets();
  break;

  case 'spotify_this_song':
  spotify_this_song(itemToAskFor);
  break;

  case 'movie_this'
  movie_this(itemToAskFor);
  break;

  case 'do_what_it_says'
  do_what_it_says();
  break;
}

// =====================================================================
// 5. CREATE FUNCTIONS THAT WILL BE CALLED BY THE SWITCH STATEMENTS ABOVE

  // A. Create my_tweets function
  function my_tweets() {
      twitterClient.get('statuses/user_timeline', params, gotTweet);
      function gotTweet(err, data, response) {
        //--- BONUS ---Write if statement to log data to bash ----- and create log.txt file
        if (!error && response.statusCode == 200){
           fs.appendFile('terminal.log', ('=============== LOG ENTRY BEGIN ===============\r\n' 
            + Date() + '\r\n \r\nTERMINAL COMMANDS:\r\n$: ' + process.argv + '\r\n \r\nDATA OUTPUT:\r\n'), 
           function(err){
            if (err) throw err;
          });
           //Print last 20 tweets
           console.log(' ');
           console.log('====Last 20 Tweets:')
           for (j = 0; j < data.length; j++) {
            var digits = j + 1;
                console.log(' ');
                console.log([j + 1] + '. ' + data[j].text);
                console.log('Created on: ' + data[j].created_at);
                console.log(' ');
                fs.appendFile('terminal.log', (digits + '. Tweet: ' + data[j].text + '\r\nCreated at: ' 
                  + data[j].created_at + ' \r\n'), function(err) {
                    if (err) throw err;
                  });
           }
           fs.appendFile('terminal.log', ('=============== LOG ENTRY END ===============\r\n \r\n'), function(err){
            if (err) throw err;
          });
      }
    }
    //-----End my_tweets function ------------------  

// ==========================================================

//2. Make a Javascript file to Spotify songs
// ===========================================================

// a.   install spotify with npm: npm install spotify

// b. 	require spotify
var request = require('request');

var songName = 'My love';

var queryUrl = 'https://api.spotify.com/v1/search?q=' + songName + '&type=track'

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

// Then run a request to the OMDB API with the movie specified
request(queryUrl, function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The song's release year is: " + JSON.parse(body).Year);
  }
});
  // ...

  // Then log the Release Year for the movie
  // ...

  // Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...


// Grab or assemble the movie name and store it in a variable called "movieName"
var movieName = "";
// ...


// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";


// This line is just to help us debug against the actual URL.
console.log(queryUrl);


// Then create a request to the queryUrl
var request = require("request");
// ...
// Then run a request to the OMDB API with the movie specified
request("http://www.omdbapi.com/?t=star+wars&y=&plot=short&r=json", function(error, response, body) {

  // If the request is successful (i.e. if the response status code is 200)
  if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log("The movie's release year is: " + JSON.parse(body).Year);
  }
});
  // ...

  // Then log the Release Year for the movie
  // ...



// ============================================
//4: Create `node liri.js do-what-it-says 
// =============================================
// Includes the FS package for reading and writing packages
var fs = require("fs");

// Running the readFile module that's inside of fs.
// Stores the read information into the variable "data"

fs.readFile("random.txt", "utf8", function(err, data) {

// Break the string down by comma separation and store the contents into the output array.
var output = data.split(",");

var do_what_it_says = process.argv[3];
// Loop Through the newly created output array
for (var i = 0; i < output.length; i++) {
	// Print each element (item) of the array/
	console.log(output[i]);
}

});
