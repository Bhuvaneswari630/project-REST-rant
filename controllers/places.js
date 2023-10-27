const router = require('express').Router()
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/H-Thai-ML.jpg',
    picAuthor: 'Louis Hansel',
    authorLink: 'https://unsplash.com/@louishansel'
  }, 
  {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/Cafe.jpg',
    picAuthor: 'Rizky Subagja',
    authorLink: 'https://unsplash.com/@subagjav'
  },
  {
    name: 'Slice of Spice',
    city: 'Charlotte',
    state: 'NC',
    cuisines: 'Indian',
    pic: '/images/slice.jpg',
    picAuthor: 'Izzah',
    authorLink: 'https://unsplash.com/@teaforturmeric'
  }
]
router.get('/', (req, res) => {
    // res.send('GET /places')  
    // should give file name from view folder
    res.render('places/Index', { places })
})
router.post('/', (req, res) => {
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