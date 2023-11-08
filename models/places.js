const mongoose = require('mongoose')
const { Schema } = mongoose

const placeSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  cuisines: { type: String, required: true },
  pic: { type: String, default: 'http://placehold.it/500x500.png' },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'Hey, this is in the future']
  },
  comments: [{
    type: Schema.Types.ObjectID,
    ref: 'Comment'
  }]
})
// instance method
placeSchema.methods.showEstablished = function () {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

const Place = mongoose.model('Place', placeSchema)

module.exports = Place

// module.exports = [{
    // name: 'H-Thai-ML',
    // city: 'Seattle',
    // state: 'WA',
    // cuisines: 'Thai, Pan-Asian',
    // pic: '/images/H-Thai-ML.jpg',
//     picAuthor: 'Louis Hansel',
//     authorLink: 'https://unsplash.com/@louishansel'
//   },
//   {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/Cafe.jpg',
//     picAuthor: 'Rizky Subagja',
//     authorLink: 'https://unsplash.com/@subagjav'
//   },
//   {
//     name: 'Slice of Spice',
//     city: 'Charlotte',
//     state: 'NC',
//     cuisines: 'Indian',
//     pic: '/images/slice.jpg',
//     picAuthor: 'Izzah',
//     authorLink: 'https://unsplash.com/@teaforturmeric'
//   }
// ]