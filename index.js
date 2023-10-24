require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Home page')
})
app.get('*', (req, res) => {
    res.status(404).send(`<h1>404 page</h1>`)
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})