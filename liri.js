// 1. Include the twitter NPM package (Remember to run "npm install twitter"!)
var Twit = require('twit');

// Take in the command line arguments
var my_tweets = process.argv[3];

// 2. Grab data from keys.js. 
// 3. Then store the keys in a variable
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
//2. Spotify songs
//


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
