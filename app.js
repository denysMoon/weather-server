const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const reviewsRouter = require('./routes/rewies')

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res)=>{
    res.send('Hi from server!!!')
})

app.use('/reviews', reviewsRouter)


mongoose.connect('mongodb+srv://weather:12345@cluster0.1ce9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', ()=>console.log('DB On'))

app.listen(3001, ()=>console.log('Server On'))