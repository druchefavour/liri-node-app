// 1. Include the twitter NPM package (Remember to run "npm install twitter"!)
var Twit = require('twit');

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
	q: 'node',
	count: 2
}

twitter.get('search/tweets', params, gotTweet);
function gotTweet(err, data, response) {
	console.log(data);
}