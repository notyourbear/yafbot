_ = require('underscore');
path = require('path');
maker = require('./maker');

const getSchema = (input) => {
	if(_.isObject(input) && _.has(input, 'schema')){
		return input.schema;
	} else {
		return input;
	}
};

const getSample = (input) => {
	if(_.isArray(input)){
		return _.sample(input);
	} else {
		return input;
	}
}

const createPath = _.compose(getSample, getSchema);

module.exports = (schemas, options) => {
	return _.reduce(schemas, (memo, s, i) => {
		let p = createPath(s);
		let m = createPath(memo);
		let schema = require(path.join(__dirname,'../../', p))

		switch(true){
			case i == 1:
				return maker(require(path.join(__dirname,'../../', m)), options) + maker(schema, options);
			default:
				return m + maker(schema, options);
		}
	});
}
