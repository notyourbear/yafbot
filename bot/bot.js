const Twit = require('twit');
const Config = require('../config.js')

var Bot = new Twit({
  consumer_key:         Config.consumer_key,
  consumer_secret:      Config.consumer_secret,
  access_token:         Config.access_token,
  access_token_secret:  Config.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

Bot.tweet = (text, self) => {
  var part1, part2;
  if(text.length >= 140){
    part1 = text.slice(0, 140)
    part2 = text.slice(140)
  } else {
    part1 = text
  }

  if(self !== true){
    console.log(part1)
  } else {
    console.log('@young_adult_fic' + part1)
  }

  if(_.isString(part2)){
    Bot.tweet(part2, true)
  }
  // what needs to happen?
  // if its larger that 140 it needs to be cut up into parts
  // the first part will be tweeted,
  // the second will be sent through and bot tweeted with @...
  // this.post('statuses/update', {status: text}, function(err, data, response){
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('success!:', data);
  //   }
  // });
}

module.exports = Bot;
