const path = require('path');
const _ = require('underscore');
const RandomName = require('node-random-name')

const bot = require('./bot/bot');
const capitalize = require('./util/capitalize');
const schemaLoader = require('./util/sentence/schemaLoader');

const defineAge = require('./util/age');
const gender = _.sample(['male', 'female']);
const job = _.sample(require('./models/jobs'));

const schemas = require('./sentences/index');
const schema = _.sample(schemas);

var options = {
  person: {
    name: RandomName({first: 'true', gender: gender}),
    gender: gender
  }
}


var sentence = schemaLoader(schema, options)

bot.tweet(capitalize(sentence));
