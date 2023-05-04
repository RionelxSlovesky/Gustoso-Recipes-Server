const express = require('express')
const cors = require('cors')
const chefs = require('./data/chef.json')


const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

app.get('/',(req,res) => {
    res.send('Gustoso Recipes Working Well')
})

app.get('/chefs',(req,res)=> {
    res.send(chefs)
})

app.get('/chefs/:id',(req,res) => {
    const id = req.params.id
    const chef = chefs.find(chef => chef.id===parseInt(id))
    res.send(chef)
})


app.listen(port, () => {
    console.log('Gustoso Recipes is running at Port:' + port)
})