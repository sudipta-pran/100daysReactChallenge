const express = require('express')
const MongoClient = require('mongodb').MongoClient
const app = express()
let db
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
    db.collection('posts').find().toArray((err, results) => {
        console.log(results)
        res.send(results)
    })
    
})

//Post request
app.post('/', (req,res) => {
   
    db.collection('posts').insertOne(req.body, (err, result) => {
        if (err) return console.log(err)
        res.redirect('/')
    })

})



MongoClient.connect('mongodb://abc123:abc123@ds135252.mlab.com:35252/reactchallenge',
    { useNewUrlParser: true }, 
    (err, client) => {
        if (err) return console.log(err)
        db = client.db('reactchallenge') // whatever your database name is
        app.listen(5000, () => {
            console.log('Server Started at PORT 5000')
        })
    }
)