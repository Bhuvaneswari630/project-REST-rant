const router = require('express').Router()
const places = require('../models/places')

router.get('/', async (req, res) => {
    // res.send('GET /places')  
    try {
        const allPlaces = await places.find();
        res.render('places/Index', { places: allPlaces })
    } catch (e) {
        console.log('error', e);
        res.status(404).render('Error404')
    }

    // should give file name from view folder
})
router.post('/', async (req, res) => {
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
    // places.push(place)
    await places.create(place)
    // should give the path 
    res.redirect('/places')
})
router.get('/new', (req, res) => {
    // res.send('Form page for creating a new place')
    res.render('places/New')
})
router.put('/:id', (req, res) => {
    // res.send('Update a particular place')
    let index = Number(req.params.id)
    console.log(req.body);
    if (isNaN(index)) {
        res.render('Error404')
    } else if (!places[index]) {
        res.render('Error404')
    } else {
        let place = places[index]
        // if (!req.body.pic) {
        //     // Default image if not provided
        //     place.pic = 'http://placekitten.com/400/400'
        // }
        // if (!req.body.city) {
        //     place.city = 'Anytown'
        // }
        // if (!req.body.state) {
        //     place.state = 'USA'
        // }
        // places[index] = req.body
        places[index] = { ...place, ...req.body }
        res.redirect(`/places/${index}`)
    }
})
router.delete('/:id', (req, res) => {
    let index = Number(req.params.id)
    if (isNaN(index)) {
        res.render('Error404')
    } else if (!places[index]) {
        res.render('Error404')
    } else {
        places.splice(index, 1)
        res.redirect('/places')
    }

    // res.send('Delete a particular place')
})

router.get('/:id', async (req, res) => {
    // let index = Number(req.params.id)
    // if (isNaN(index)) {
    //     res.render('Error404')
    // } else if (!places[index]) {
    //     res.render('Error404')
    // }
    // else {
    try {
        let place = await places.findById(req.params.id)
        res.render('places/Show', {
            place: place,
            index: req.params.id
        })
    } catch (e) {
        console.log('error', e);
        res.render('Error404')
    }

    // }

    // res.send('Details about a particular place')
})

router.get('/:id/edit', (req, res) => {
    // res.send('Form page for editing an existing place')
    let index = Number(req.params.id)
    if (isNaN(index)) {
        res.render('Error404')
    } else if (!places[index]) {
        res.render('Error404')
    } else {
        let place = places[req.params.id]
        res.render('places/Edit', {
            place: place,
            index: index
        })
    }
})

router.post('/:id/rant', (req, res) => {
    res.send('Create a rant (comment) about a particular place')
})
router.delete('/:id/:rantId', (req, res) => {
    res.send('Delete a rant (comment) about a particular place')
})



module.exports = router