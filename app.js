const express = require('express')
const app = express()
const port = 3000
const config = require('./config.json');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    key = req.body.api_key;
    if(key == config.api_key){
        res.send('Sensitive Data : I put milk before cereal');
    }
    else{
        res.send('Unauthorized');
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})