// ====================================================================================
// 1. Argument Definition: argv[2] to call the js file; argv[3] to take the command line
//=====================================================================================

var nodeJsFile = process.argv[2];

var thingsToAskFor = process.argv[3];

// ===================================================================================
// 2. Use switch statements to alternate between four cases [(a) Getting tweets from my twitter]
// (b) Getting songs from spotify (c) Getting movies from OMDB and (d) Reading and displaying texts from a .txt file]

//a. Include the twitter NPM package (Remember to run "npm install twitter"!)
var Twit = require('twit');

//b. Take in the command line arguments
var my_tweets = process.argv[3];

// c. Grab data from keys.js. 
// Then store the keys in a variable
// ================================================================ 
// Using the require keyword lets us access all of the exports
// in our keys.js file

var keys = require('./keys');

// This will print everything in exports.

console.log(keys);

var twitter = new Twit(keys);

var params = {
	q: 'I',
	count: 20,
	screen_name: 'moven_tech'
}

twitter.get('search/tweets', params, gotTweet);
function gotTweet(err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
			console.log(JSON.stringify(tweets[i].text));
			console.log(JSON.stringify(tweets[i].created_at));
	}
}

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
