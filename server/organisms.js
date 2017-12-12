'use strict'
const api = require('express').Router()
const { Organisms } = require('../db/models')

api.get('/', (req, res, next) => {
    Organisms.findAll()
        .then(organisms => res.json(organisms))
        .catch(next)
})

api.get('/:OrganismId', (req, res, next) => {
    Organisms.findById(Number(req.params.OrganismId))
        .then(organism => res.json(organism))
        .catch(next)
})

api.post('/', (req, res, next) => {
    // add sessions logic to ensure user is logged in before able to update an organism
    Organisms.create(req.body)
        .then(organism => res.json(organism))
        .catch(next)
})

api.put('/:OrganismId', (req, res, next) => {
    // add sessions logic to ensure user is logged in before able to update an organism
    Organisms.findById(Number(req.params.OrganismId))
        .then(organism => organism.update(req.body))
        .then(organism => res.json(organism))
        .catch(next)
})

module.exports = api;