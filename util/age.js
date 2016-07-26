const _ = require('underscore');

module.exports = (low, high) => {
  var num, pronoun;

  if(_.isNumber(low) && _.isNumber(high)){
    num = _.random(low, high);
  } else {
    num = _.random(13, 19);
  }

  if(num == 18){
    pronoun = 'an'
  } else {
    pronoun = 'a'
  }

  return {
    var: num,
    sentence: pronoun + ' ' + num + '-year old',
    age: num + '-year old'
  };
}
