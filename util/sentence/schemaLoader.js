const _ = require('underscore');
const path = require('path');

const maker = require('./maker');
const capitalize = require('../capitalize');

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
	return _.reduce(schemas, (memo, input, i) => {
		let p = createPath(input);
		let m = createPath(memo);
		let schema = require(path.join(__dirname,'../../', p));
		let space = require(path.join(__dirname, '../../', 'schema/util/space'));

		switch(true){
			case i == 1:
				return maker(require(path.join(__dirname,'../../', m)), options) + maker(space) + maker(schema, options);
			case schema.length == 1 && schema[0].type == 'punctuation':
				return m + maker(schema, options);
			case _.has(input, 'options'):
				if(_.has(input.options, 'capitalize') && input.options.capitalize == true){
					return m + maker(space) + capitalize(maker(schema, options));
				}
				break;
			default:
				return m + maker(space) + maker(schema, options);
		}
	});
}
