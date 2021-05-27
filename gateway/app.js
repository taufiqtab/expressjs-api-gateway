
const express = require('express')
const app = express()
const port = 3000
var router = require('./router')
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('API Gateway !')
})

app.use(router)

app.listen(port, () => {
  console.log(`API Gateway Running at http://localhost:${port}`)
})