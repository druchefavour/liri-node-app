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
  *```.DS_Store```

* Make a JavaScript file named ```keys.js```. 
  
  ```keys.js``` contains text like:
  ```console.log('this is loaded');```
  ```exports.twitterKeys = {```
  ```consumer_key: '<input here>',```
  ```consumer_secret: '<input here>',```
  ```access_token_key: '<input here>',```
  ```access_token_secret: '<input here>',```
}```

* Add ```keys.js```to the .gitignore.

* Create a second file called ```keys.examples.js``` and copy the contents from keys.js. 

* Inside the quotations where the secret keys are placed, replace with plain text. 

