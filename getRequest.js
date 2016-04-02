var $ = require("jquery");
var movieTitle = "Frozen"; // Obviously we would NEVER expect anyone to like this one
var getRequestEndpoint = "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&r=json";

$.get( getRequestEndpoint, function( data ) {
  console.log(JSON.stringify(data));
  // Let's do some shit with this JSON file
});
