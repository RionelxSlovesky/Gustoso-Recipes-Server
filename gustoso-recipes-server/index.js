const express = require('express')
const cors = require('cors')


const app = express()
const port = process.env.PORT || 5000;

app.use(cors())

app.get('/',(req,res) => {
    res.send('Gustoso Recipes Working Well')
})


app.listen(port, () => {
    console.log('Gustoso Recipes is running at Port:' + port)
})