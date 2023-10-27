const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    // res.send('GET /places')  
    // should give file name from view folder
    res.render('places/Index', { places })
})
router.post('/', (req, res) => {
    console.log(req.body);
    let place = req.body
    if (!req.body.pic) {
        // Default image if not provided
        place.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
        place.city = 'Anytown'
    }
    if (!req.body.state) {
        place.state = 'USA'
     }
     places.push(place)
    // should give the path 
    res.redirect('/places')
})
router.get('/new', (req, res) => {
    // res.send('Form page for creating a new place')
    res.render('places/New')
})
router.get('/:id', (req, res) => {
    let place = places[req.params.id]
    res.render('places/Show', { 
        place : place,
        index : req.params.id
    })
    // res.send('Details about a particular place')
})
router.put('/:id', (req, res) => {
    res.send('Update a particular place')
})
router.delete('/:id', (req, res) => {
    res.send('Delete a particular place')
})
router.get('/:id/edit', (req, res) => {
    // res.send('Form page for editing an existing place')
    let place = places[req.params.id]
    res.render('places/Edit', {place})
})
router.post('/:id/rant', (req, res) => {
    res.send('Create a rant (comment) about a particular place')
})
router.delete('/:id/:rantId', (req, res) => {
    res.send('Delete a rant (comment) about a particular place')
})



module.exports = router