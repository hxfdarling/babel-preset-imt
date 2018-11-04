const create = require('./create');

module.exports = function(api) {
  const env = process.env.BABEL_ENV || process.env.NODE_ENV;
  return create(api, env);
};
