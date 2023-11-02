require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')

const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

const methodOverride = require('method-override')
app.use(express.static('public'))

app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.set('views', __dirname + '/views')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    // res.send('Home page')
    res.render('Home')
})
app.get('*', (req, res) => {
    // res.status(404).send(`<h1>404 page</h1>`)
    res.render('Error404')
})

const db = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log('Connected to MongoDb');
    } catch (e) {
        console.log('Not connected to MongoDb', e);
    }
}
db()

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})