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

//MiddleWare Body-Parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Set API
//Get all post
app.get('/', (req,res) => {
    res.send(Posts)
})

//Post request
app.post('/', (req,res) => {
    let id = Posts.length + 1
    let title = req.body.title
    let body = req.body.body
    Posts.push({
        id,
        title,
        body
    })
    res.send(Posts)
})

app.listen('5000', () => console.log('Server Started at PORT 5000'))