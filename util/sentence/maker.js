const _ = require('underscore');
const RandomName = require('node-random-name')

const age = require('../age');

const checkForPunctuation = (item) => {
  if (_.contains(['.', ',', ':', ';', '!'], item)) return true;
  return false;
}

module.exports = (schema) => {

  let sentence = _.map(schema, (i) => {
    var p = '../../models/' + i.type,
        value;

    switch (true) {
      case i.type == 'person':
        value = RandomName({first: 'true'});
        break;
      case i.type == 'age':
        value = age().sentence;
        break;
      case _.has(i, 'subtype') && _.has(i, 'tense'):
        value = _.sample(require(p)[i.subtype])[i.tense];
        break;
      case _.has(i, 'tense'):
        value = _.sample(require(p))[i.tense];
        break;
      case _.has(i, 'subtype'):
        value = _.sample(require(p)[i.subtype]);
        break;
      default:
        value = _.sample(require(p));
    }

    return value;
  });

  let phrase = _.reduce(sentence, (memo, i) => {
    if (checkForPunctuation(i)) return memo + i;
    return memo + ' ' + i;
  });

  return phrase
};
