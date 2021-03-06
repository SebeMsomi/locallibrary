// .sequelizerc
require("babel-register");
const path = require('path');
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.js')
}
module.exports = {
  'config': path.resolve('config', 'database.json'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
  'migrations-path': path.resolve('db', 'migrations')
};
