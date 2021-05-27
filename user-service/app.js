
const express = require('express')
const app = express()
const port = 3002

app.get('/', (req, res) => {
  res.send('User Service !')
})

app.get('/users', (req, res) => {
    res.send('List Of users !')
})

app.get('/delete', (req,res) => {
  res.send('user deleted')
})

app.listen(port, () => {
  console.log(`User Service Running at http://localhost:${port}`)
})