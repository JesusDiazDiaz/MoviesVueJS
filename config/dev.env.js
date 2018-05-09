'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  END_POINT: '"https://api.themoviedb.org/3"',
  API_KEY: '"00e5b946af568adbac06a26b43be1897"'
})
