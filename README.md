# LIRI NODE APP

## Overview

In this project, I made LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and gives back data.

For this project, LIRI displays my latest tweets. To retrieve the data that will power the app, I sent requests to the Twitter, Spotify and IMDB APIs. These Node packages are crucial for the project.

  * Twitter
  * Spotify
  * Request (Request is used to grab data from the OMDB API).

## Procedure

* Make a new GitHub repository called liri-node-app and clone it to the local computer.

* Make a .gitignore file and add the following lines to it.
  * ```node_modules```
  * ```.DS_Store```

* Make a JavaScript file named ```keys.js```. 
  
  ```keys.js``` contains text like:
  ```console.log('this is loaded');```
  ```exports.twitterKeys = {```
  ```consumer_key: '<input here>',```
  ```consumer_secret: '<input here>',```
  ```access_token_key: '<input here>',```
  ```access_token_secret: '<input here>',```
```}```

* Add ```keys.js```to the .gitignore.

* Create a second file called ```keys.examples.js``` and copy the contents from keys.js. 

* Inside the quotations where the secret keys are placed, replace with plain text. 

## Creating Twitter Keys

* Get Twitter API keys by following these steps:
  * Visit https://apps.twitter.com/app/new
  * Fill out the form with dummy data. 
    * Type http://google.com in the Website input. 
    * Don't fill out the Callback URL input. Then submit the form.

  * On the next screen, click the Keys and Access Tokens tab to get the consumer key and secret.
    * Copy and paste them where the <input here> tags are inside your ```keys.js``` file.
  * At the bottom of the page, click the Create my access token button to get the access token key and secret.
    * Copy the access token key and secret displayed at the bottom of the next screen. Paste them where the <input here> tags are inside the ```keys.js``` file.
 
 ## Creating Texts
 * Make a file called random.txt.

 * Inside of random.txt put the following in with no extra characters or white space:
   * spotify-this-song,"I Want it That Way"

## Javascript
 * Make a JavaScript file named ```liri.js```.

 * At the top of the ```liri.js``` file, write the code you need to grab the data from ```keys.js```. Then store the keys in a variable.

 Make it so ```liri.js``` can take in one of the following commands:
   * my-tweets
   * spotify-this-song
   * movie-this
   * do-what-it-says

## What Each Command Should Do

* ```node liri.js my-tweets```

  * This will show my last 20 tweets and when they were created at in my terminal/bash window.
* ```node liri.js spotify-this-song '<song name here>'```

  * This will show the following information about the song in my terminal/bash window

    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from - if no song is provided then the program will default to "The Sign" by Ace of Base
* ```node liri.js movie-this '<movie name here>'```
  * This will output the following information to your terminal/bash window:
    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.
    * Rotten Tomatoes Rating.
    * Rotten Tomatoes URL.
  * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
* node liri.js do-what-it-says

## fs Node Package
* Using the fs Node package, LIRI will take the text inside of ```random.txt``` and then use it to call one of LIRI's commands.
* It also runs spotify-this-song for "I Want it That Way," as follows the text in ```random.txt```.

* In addition to logging the data to the terminal/bash window, output the data to a .txt file called ```log.txt```.

* Each command I run is appended to the log.txt file. The file is not overwritten each time I run a command.




