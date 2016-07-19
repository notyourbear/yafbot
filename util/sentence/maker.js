const _ = require('underscore');
const capitalize = require('../capitalize');

const checkForPunctuation = (item) => {
  if (_.contains(['.', ',', ':', ';', '!'], item)) return true;
  return false;
}


module.exports = (schema) => {
  let sentence = _.map(schema, (i) => {
    var p = '../../models/' + i.type, value

    if(_.has(i, 'subtype') && _.has(i, 'tense')){
      value = _.sample(require(p)[i.subtype])[i.tense]
    } else if (_.has(i, 'tense')) {
      value = _.sample(require(p))[i.tense]
    } else if (_.has(i, 'subtype')) {
      value = _.sample(require(p)[i.subtype])
    } else {
      value = _.sample(require(p))
    }

    return value;
  });

  let phrase = _.reduce(sentence, (memo, i, iteree) => {
    if(iteree == 1){
      memo = capitalize(memo);
    }
    if (checkForPunctuation(i)) return memo + i;
    return memo + ' ' + i;
  });

  return phrase
};
