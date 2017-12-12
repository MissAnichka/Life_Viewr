'use strict'
const api = require('express').Router()
const {resolve} = require('path')

api.use('/organisms', require('./organisms'));

api.get('/', (req, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')))

module.exports = api;