require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    // res.send('Home page')
    res.render('Home')
})
app.get('*', (req, res) => {
    // res.status(404).send(`<h1>404 page</h1>`)
    res.render('Error404')
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})