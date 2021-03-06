var express = require('express');
var router = express.Router()
const apiAdapter = require('../apiAdapter')

const BASE_URL = 'http://localhost:3001'
const api = apiAdapter(BASE_URL)

router.get('/products', (req, res) => {
  api.get(req.path).then(resp => {
    res.send(resp.data)
  })
})

router.post('/products', (req, res) => {
  api.post(req.path,req.body).then(resp => {
    res.send(resp.data)
  })
})


module.exports = router