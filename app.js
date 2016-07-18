const path = require('path');
const _ = require('underscore');
const RandomName = require('node-random-name')

const bot = require('./bot/bot');
const defineAge = require('./util/age');
const gender = _.sample(['male', 'female']);
const job = _.sample(require('./models/jobs'));

var sentence = [];
sentence.push(RandomName({gender: gender, first:true}));
sentence.push(defineAge().sentence);
sentence.push(job);

var phrase = _.reduce(sentence, (memo, i) => {
  return memo + ' ' + i
});

// Johnny, a 13-year old job must travel to:

bot.tweet(phrase);
