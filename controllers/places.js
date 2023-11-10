const router = require('express').Router()
const places = require('../models/places')
const comments = require('../models/comments')

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
    try {
        await places.create(place)
        // should give the path 
        res.redirect('/places')
    } catch (e) {
        if (e && e.name == 'ValidationError') {
            let message = 'Validation Error:'
            for (let field in e.errors) {
                message += `${field} was ${e.errors[field].value} .`
                message += `${e.errors[field].message}`
                console.log('Validation error message', message);
            }
            res.render('places/new', { message })
        } else {
            console.log('Err', e);
            res.render('Error404', e)
        }
    }
})


router.get('/new', (req, res) => {
    // res.send('Form page for creating a new place')
    res.render('places/New')
})

router.put('/:id', async (req, res) => {
    // res.send('Update a particular place')
    // let index = Number(req.params.id)
    // let place = places[index]
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
    // places[index] = { ...place, ...req.body }
    try {
        let index = req.params.id
        console.log(req.body);
        await places.findByIdAndUpdate(index, req.body, { new: true })
        res.redirect(`/places/${index}`)
    } catch (e) {
        console.log('Err', e);
        res.render('Error404')
    }
})

router.delete('/:id', async (req, res) => {
    console.log('inside delete route', req.params.id);
    let index = req.params.id
    await places.findByIdAndDelete(index)
    res.redirect('/places')
    // }

    // res.send('Delete a particular place')
})

router.get('/:id/edit', async (req, res) => {
    // res.send('Form page for editing an existing place')
    let index = req.params.id
    try {
        let place = await places.findById(req.params.id)
        res.render('places/Edit', {
            place: place,
            index: index
        })
    } catch (e) {
        console.log('Err', e);
        res.render('Error404')
    }
})

router.get('/:id', async (req, res) => {
    let index = req.params.id
    // if (isNaN(index)) {
    //     res.render('Error404')
    // } else if (!places[index]) {
    //     res.render('Error404')
    // }
    // else {
    try {
        let place = await places.findById(index)
            .populate('comments')
        // console.log('Comments', place.comments);
        res.render('places/Show', {
            place: place,
            index: index
        })
    } catch (e) {
        console.log('error', e);
        res.render('Error404')
    }

    // }

    // res.send('Details about a particular place')
})

router.post('/:id/comments', async (req, res) => {
    // console.log('req ',req.body.content);
    let index = req.params.id
    let place = await places.findById(index)
    if (req.body.rant){
        req.body.rant = true
    } else {
        req.body.rant = false
    }
    let comment = await comments.create(req.body)
    // console.log('new comment', comment.id);
    place.comments.push(comment.id)
    place.save()
    // res.send('new comment added', req.body)
    res.redirect(`/places/${index}`)
})
router.delete('/:id/comments/:cID', (req, res) => {
    let index = req.params.id
    res.send('Deleting a comment')
})
router.post('/:id/rant', (req, res) => {
    res.send('Create a rant (comment) about a particular place')
})
router.delete('/:id/:rantId', (req, res) => {
    res.send('Delete a rant (comment) about a particular place')
})



module.exports = router