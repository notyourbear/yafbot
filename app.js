const path = require('path');
const _ = require('underscore');

const bot = require('./bot/bot');
const maker = require('./util/sentence/maker');
const capitalize = require('./util/capitalize');

const setUpSchema = require('./schema/setUp/destruction');
const personSchema = require('./schema/util/person_age_job');
const effectSchema = require('./schema/effect/findSafety');
const commaSchema = require('./schema/util/comma');
const periodSchema = require('./schema/util/period');
const questSchema = require('./schema/quest/discoverItem');
const mustSchema = require('./schema/util/must');
const arrivalSchema = require('./schema/setUp/arrival');

const defineAge = require('./util/age');
const gender = _.sample(['male', 'female']);
const job = _.sample(require('./models/jobs'));

var sentence = maker(setUpSchema);
sentence += maker(commaSchema);
sentence += ' ' + maker(personSchema);
sentence += ' ' + maker(mustSchema);
sentence += ' ' + maker(questSchema);
sentence += ' ' + maker(effectSchema);
sentence += maker(periodSchema);

sentence = maker(arrivalSchema);

bot.tweet(capitalize(sentence));
