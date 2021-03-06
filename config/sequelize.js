const config = require('./config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.db, {logging: false});
sequelize.authenticate()
  .then(() => console.log('database is connected'))
  .catch(err => console.error(err));

module.exports = sequelize;
