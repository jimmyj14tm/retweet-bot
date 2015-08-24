Retweet Bot (Node.js)
==================

This is a simple twitter retweet bot, designed to retweet the contents of a tweet.

This implementation tweets for [@imus_online](https://twitter.com/imus_online) and [@wis_hk](https://twitter.com/wis_hk).

## Setup Your Own
1. Download this repo with `git clone https://github.com/jimmyj14tm/retweet-bot.git`.
2. Open `index.js` and replace the values in the `config` object with your own.
3. Create a twitter application at https://apps.twitter.com/app/new and grant it the necessary access, and generate your tokens/keys.
4. Deploy the bot to heroku. Guide: https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app
5. Setup token/keys as config vars from step 3 to heroku. Guide: https://devcenter.heroku.com/articles/config-vars#setting-up-config-vars-for-a-deployed-application

Special thanks to: 
http://www.bryanbraun.com/2014/12/13/how-to-set-up-a-simple-javascript-twitter-bot
https://github.com/bryanbraun/twitter-listbot.git
https://github.com/sugendran/node-retweeter

