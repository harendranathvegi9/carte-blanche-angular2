/* eslint-disable */

var server = require('./server');
var path = require('path');
var projectBasePath = process.argv[2];
var options = JSON.parse(process.argv[3]);

// Start the server
console.log('STARTING SERVER');
server.start(projectBasePath, options.variationBasePath, options);