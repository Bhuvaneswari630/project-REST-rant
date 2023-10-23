require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send('Hompage')
})
app.get('*', (req, res) => {
    res.status(404).send(`<h1>404 page</h1>`)
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})