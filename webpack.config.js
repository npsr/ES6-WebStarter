const env = process.env.NODE_ENV || 'dev';

function buildConfig(env) {
  return require('./.config/webpack.' + env + '.js')
}

module.exports = buildConfig(env)
