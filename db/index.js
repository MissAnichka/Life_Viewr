const Sequelize = require('sequelize');
const pkg = require('../package.json');

const name = process.env.DATABASE_NAME || pkg.name;
const connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${name}`;

console.log(`Opening database connection to ${connectionString}`);

module.exports = new Sequelize(connectionString, {
  logging: false
});

require('./models')