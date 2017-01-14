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

  case 'movie_this':
  movie_this(itemToAskFor);
  break;

  case 'do_what_it_says':
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

// =============================================================
  // B. Create spotify_this_song function
  // ===========================================================
  function spotify_this_song(itemToAskFor) {
    if(itemToAskFor == null){
      itemToAskFor = 'The Sign'
    }
    request('https://api.spotify.com/v1/search?q=' + itemToAskFor + '&type=track', function(error, response, body){
       if (!error && response.statusCode == 200){
        jsonBody = JSON.parse(body);
        console.log(' ');
        console.log('Artist: ' + jsonBody.tracks.items[0].artists[0].name);
        console.log('Song : ' + jsonBody.tracks.items[0].name);
        console.log('Preview Link of the Song: ' + jsonBody.tracks.items[0].preview_url);
        console.log('Album: ' + jsonBody.tracks.items[0].album.name);
        console.log(' ');
        fs.appendFile('terminal.log', ('=============== LOG ENTRY BEGIN ===============\r\n' 
          + Date() +'\r\n \r\nTERMINAL COMMANDS:\r\n$: ' + process.argv + '\r\n \r\nDATA OUTPUT:\r\n' 
          + 'Artist: ' + jsonBody.tracks.items[0].artists[0].name + '\r\nSong: ' + jsonBody.tracks.items[0].name + 
          '\r\nPreview Link of the Song: ' + jsonBody.tracks.items[0].preview_url + 
          '\r\nAlbum: ' + jsonBody.tracks.items[0].album.name + 
          '\r\n=============== LOG ENTRY END ===============\r\n \r\n'), function(err){
          if (err) throw err;
        });
       }
    });
  }
  // end spotify_this_song function

// ==================================================================
  // ---------- C. Create movie_this function ------------
  // ================================================================
  function movie_this(itemToAskFor) {
    if (itemToAskFor == null) {
      itemToAskFor == 'Mr. Nobody';
    }
    request('http://www.omdbapi.com/?t=' + itemToAskFor + '&tomatoes=true&r=json', function(error, response, body){
      if (!error && response.statusCode == 200) {
        jsonBody = JSON.parse(body);
        console.log(' ');
        console.log('Title: ' + jsonBody.Title);
        console.log('Year: ' + jsonBody.Year);
        console.log('IMDb Rating: ' + jsonBody.imdbRating);
        console.log('Country: ' + jsonBody.Country);
        console.log('Language: ' + jsonBody.Language);
        console.log('Plot: ' + jsonBody.Plot);
        console.log('Actors: ' + jsonBody.Actors);
        console.log('Rotten Tomatoes Rating: ' + jsonBody.tomatoRating);
        console.log('Rotten Tomatoes URL: ' + jsonBody.tomatoURL);
        console.log(' ');
        fs.appendFile('log.txt', ('=============== LOG ENTRY BEGIN ===============\r\n' + Date() 
          + '\r\n \r\nTERMINAL COMMANDS: ' + process.argv + '\r\nDATA OUTPUT:\r\n' 
          + 'Title: ' + jsonBody.Title + '\r\nYear: ' + jsonBody.Year + '\r\nIMDb Rating: ' + 
          jsonBody.imdbRating + '\r\nCountry: ' + jsonBody.Country + '\r\nLanguage: ' + 
          jsonBody.Language + '\r\nPlot: ' + jsonBody.Plot + '\r\nActors: ' + jsonBody.Actors + 
          '\r\nRotten Tomatoes Rating: ' + jsonBody.tomatoRating + '\r\nRotten Tomatoes URL: ' + 
          jsonBody.tomatoURL + '\r\n =============== LOG ENTRY END ===============\r\n \r\n'), function(err) {
          if (err) throw err;
        });
      }
    });
  }
  // end movie_this function





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
