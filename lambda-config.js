config = require('./fls/config.js');

module.exports = {
 profile: '',
// load your AWS credentials from a custom profile
 region: 'us-west-2',
//the region of your Lambda function
 handler: 'app.handler',
//the name of the handler function: index because the main file is index.js
 role: 'arn:aws:iam::' + config.account_id +  ':role/lambda_basic_execution', // the Lambda role
 functionName: '',
//name
 timeout: 10,
//how many seconds your function should run before it times out
 memorySize: 128,
//how much memory your function needs (shouldn't need more than this)
 publish: true,
// this creates a new version of your Lambda function every time you update it
 runtime: 'nodejs4.3',
// for node 10, otherwise use 'nodejs4.3'
};
