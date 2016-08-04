const _ = require('underscore');

const age = require('../age');

const capitalize = require('../capitalize')

const checkForPunctuation = (item) => {
  if (_.contains(['.', ',', ':', ';', '!'], item)) return true;
  return false;
}

module.exports = (schema, options) => {

  let sentence = _.map(schema, (i) => {
    //deal with multi-input
    if(_.isArray(i) == true){
      i = _.sample(i)
    }

    var p = '../../models/' + i.type,
        value;

    switch (true) {
      case i.type == 'person':
        value = options.person.name;
        break;
      case i.type == 'age':
        if(i.subtype == 'sentence'){
          value = age().sentence;
        } else if (i.subtype == 'age') {
          value = age().age;
        }
        break;
      case i.type == 'pronouns':
        value = require(p)[i.subtype][options.person.gender];
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

    if(_.has(i, 'capitalized')){
      if(i.capitalized === true){
        value = capitalize(value);
      }
    }

    return value;
  });

  let phrase = _.reduce(sentence, (memo, i) => {
    if (checkForPunctuation(i)) return memo + i;
    return memo + ' ' + i;
  });

  return phrase
};
