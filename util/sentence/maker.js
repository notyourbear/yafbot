const _ = require('underscore');

module.exports = (schema) => {
  let sentence = _.map(schema, (i) => {
    p = '../../models/' + i.type

    if(_.has(i, 'subtype')){
      return _.sample(require(p)[i.subtype])
    } else {
      return _.sample(require(p))
    }
  });

  return _.reduce(sentence, (memo, i) => {
    return memo + ' ' + i
  });
};
