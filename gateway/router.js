var express = require('express');
var router = express.Router()
var productService = require('./services/users.js')
var userServices = require('./services/products.js')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(productService)
router.use(userServices)

module.exports = router