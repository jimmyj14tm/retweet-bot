// START HEROKU SETUP
var express = require("express");
var app = express();
app.get('/', function(req, res){ res.send('The robot is happily running.'); });
app.listen(process.env.PORT || 5000);
// END HEROKU SETUP


// Listbot config
//
// Config.keys uses environment variables so sensitive info is not in the repo.
var config = {
	terms: ['#wis_hk'],
    keys: {
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    },
};


// what to do after we retweet something. 
// if it fails i really don't care unless 
// i'm debugging
function onReTweet(err) {
    if(err) {
        console.error("retweeting failed :(");
        console.error(err);
    }
}

// what to do when we get a tweet
function onTweet(tweet) {
    // if it's flagged as a retweet or has RT
    // in there then we probably don't want 
    // to retweet it again.
    if (tweet.retweeted) {
        return;
    }
    if (tweet.text.indexOf("RT") !== -1) {
        return;
    }
    console.log("Retweeting: " + tweet.text);
    // note we're using the id_str property since
    // javascript is not accurate for 64bit ints
    tu.retweet({
        id: tweet.id_str
    }, onReTweet);
}

var tu = require('tuiter')(config.keys);

 tu.filter({
        track: config.terms
    }, function(stream) {
        console.log("listening to stream");
        stream.on('tweet', onTweet);
    });