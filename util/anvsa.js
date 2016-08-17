const _ = require('underscore');

const anvsa = (str) => {
    let arr = str.split(' a ');
    arr = _.map(arr, (str, i, arr) =>{
      if(i == arr.length - 1){
        return str;
      }

      let shouldReplace = _.find(['a','e','i','o','u'], (e) => {
        return e === arr[i + 1][0].toLowerCase();
      });

      if(shouldReplace !== undefined){
          return str + ' an ';
      }
      return str + ' a ';
    });

    return _.reduce(arr, (memo, i) => {
      return memo + i;
    });
  }

module.exports = anvsa;
