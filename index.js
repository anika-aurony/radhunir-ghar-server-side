const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

const chefs = require('./data/chefs.json')

app.get('/', (req, res) => {
    res.send('Radhunir Ghar is running')
  })


app.get('/chefs', (req, res) => {
    res.send(chefs)
  })

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(n => n._id === id);
    res.send(selectedChef)
})
  
  app.listen(port, () => {
    console.log(`This is running on ${port}`)
  })