const path = require('path');
const _ = require('underscore');
const RandomName = require('node-random-name')

const bot = require('./bot/bot');
const capitalize = require('./util/capitalize');
const schemaLoader = require('./util/sentence/schemaLoader');

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

var person = { name: RandomName({first: 'true', gender: gender}),  gender: gender };

var schemas = [
	[arrivalSchema, commaSchema, personSchema, mustSchema, questSchema, effectSchema, periodSchema],
	[setUpSchema, commaSchema, personSchema, mustSchema, questSchema, effectSchema, periodSchema]
];

var schema = _.sample(schemas);
var sentence = schemaLoader(schema, person)

bot.tweet(capitalize(sentence));
