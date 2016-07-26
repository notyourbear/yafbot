_ = require('underscore');
path = require('path');
maker = require('./maker');

module.exports = (schemas, person) => {
	return _.reduce(schemas, (memo, s, i) => {
		let schema = require(path.join(__dirname,'../../',s))

		switch(true){
			case i == 1:
				return maker(require(path.join(__dirname,'../../',memo))) + maker(schema,person);
			case (schema[0].type == 'punctuation'):
				return memo + maker(schema, person);
			default:
				return memo + " " + maker(schema,person);
		}
	});
}
