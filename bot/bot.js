const Twit = require('twit');
const _ = require('underscore');
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
  if(text.length >= 136){
    breakIndex = _.lastIndexOf(text, ' ', 136)
    part1 = text.slice(0, breakIndex) + '...'
    part2 = text.slice(breakIndex)
  } else {
    part1 = text
  }

  // if(self !== true){
  //   Bot.post('statuses/update', {status: part1}, (err, data, response) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('success!:', data);
  //     }
  //   });
  // } else {
  //   Bot.post('statuses/update', {status:part1}, (err, data, response) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log('success!:', data);
  //     }
  //   });
  // }
  //
  // if(_.isString(part2)){
  //   Bot.tweet(part2, true)
  // }

  if(self !== true){
    console.log(part1)
  } else {
    console.log(part1)
  }

  if(_.isString(part2)){
    Bot.tweet(part2, true)
  }
}

module.exports = Bot;
