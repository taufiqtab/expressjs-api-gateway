
const express = require('express')
var bodyParser = require('body-parser');

const app = express()
const port = 3001
app.use(bodyParser.json())

app.use(bodyParser.json({
  verify: (req, res, buf) => {
    req.rawBody = buf
  }
}))

app.get('/', (req, res) => {
  res.send('Product Services !')
})

app.get('/products', (req, res) => {
    res.send('List Of products semua produk !')
})

app.post('/products', (req,res)=>{
  let auth = "Tidak Terdaftar";
  if(req.body['name'] == "opik"){
    auth = "Terdaftar";
  }
  res.send(auth);
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Product Service Running at http://localhost:${port}`)
})