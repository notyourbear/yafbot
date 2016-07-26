const path = require('path');
const _ = require('underscore');
const RandomName = require('node-random-name')

const bot = require('./bot/bot');
const capitalize = require('./util/capitalize');
const schemaLoader = require('./util/sentence/schemaLoader');

const defineAge = require('./util/age');
const gender = _.sample(['male', 'female']);
const job = _.sample(require('./models/jobs'));

const setUpSchema = 'schema/setUp/destruction'
const personSchema = 'schema/util/person_age_job'
const effectSchema = 'schema/effect/findSafety'
const commaSchema = 'schema/util/comma'
const periodSchema = 'schema/util/period'
const questSchema = 'schema/quest/discoverItem'
const mustSchema = 'schema/util/must'
const arrivalSchema = 'schema/setUp/arrival'

var person = { name: RandomName({first: 'true', gender: gender}),  gender: gender };

var schemas = [
	[arrivalSchema, commaSchema, personSchema, mustSchema, questSchema, effectSchema, periodSchema],
	[setUpSchema, commaSchema, personSchema, mustSchema, questSchema, effectSchema, periodSchema]
];

var schema = _.sample(schemas);
var sentence = schemaLoader(schema, person)

bot.tweet(capitalize(sentence));
