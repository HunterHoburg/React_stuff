var monk = require('monk');

var env = process.env.NODE_ENV || 'development';
var serviceName = process.env.DB_SERVICE_NAME || "mongo-" + env;

module.exports = monk('localhost/thoughts_db')
