const Twit = require('twit');
const Config = require('../config.js')

var Bot = new Twit({
  consumer_key:         Config.consumer_key,
  consumer_secret:      Config.consumer_secret,
  access_token:         Config.access_token,
  access_token_secret:  Config.access_token_secret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

Bot.tweet = function(text){
  console.log(text)
  // this.post('statuses/update', {status: text}, function(err, data, response){
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('success!:', data);
  //   }
  // });
}

module.exports = Bot;
