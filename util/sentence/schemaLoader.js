_ = require('underscore');
maker = require('./maker');

module.exports = (schemas, person) => {
	return _.reduce(schemas, (memo, s, i) => {
		switch(true){
			case i == 1:
				return maker(memo) + maker(s,person);
				break;
			case (s[0].type == 'punctuation'):
				return memo + maker(s, person);
				break;
			default:
				return memo + " " + maker(s,person);
		}
	});
}