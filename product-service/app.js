
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Product Services !')
})

app.get('/products', (req, res) => {
    res.send('List Of products semua produk !')
})

app.listen(port, () => {
  console.log(`Product Service Running at http://localhost:${port}`)
})