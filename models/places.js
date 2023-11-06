const mongoose = require('mongoose')
const { Schema } = mongoose

const placeSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, default: 'Anytown'},
  state: { type: String, default: 'USA'},
  cuisines: { type: String, required: true },
  pic: { type: String, default: 'https://i.ytimg.com/vi/Fk0wMVnXp3o/maxresdefault.jpg'},
  founded: Number
})
// instance method
placeSchema.methods.showEstablished = function() {
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