const path = require('path');
const _ = require('underscore');

const bot = require('./bot/bot');
const maker = require('./util/sentence/maker');

const setUpSchema = require('./schema/setUp/destruction');
const personSchema = require('./schema/util/person_age_job');
const effectSchema = require('./schema/effect/findSafety');
const commaSchema = require('./schema/util/comma');

const defineAge = require('./util/age');
const gender = _.sample(['male', 'female']);
const job = _.sample(require('./models/jobs'));

var sentence = maker(setUpSchema);
sentence += maker(commaSchema);
sentence += ' ' + maker(personSchema);

bot.tweet(sentence);
