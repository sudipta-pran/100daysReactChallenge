const express = require('express')
const Posts = require('./Posts')
const app = express()

//MiddleWare
app.use((req,res,next) => {
    // Allow CORS
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

//Set API
app.get('/',(req,res) => {
    res.send(Posts)
})

app.listen('5000', () => console.log('Server Started at PORT 5000'))