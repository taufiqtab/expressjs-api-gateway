var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')

const BASE_URL = 'http://localhost:3002'
const api = apiAdapter(BASE_URL)

router.get('/users', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.get('/delete', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})


module.exports = router