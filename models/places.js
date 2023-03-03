const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: '/images/default-restaurant.jpg'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  food: {type: String, default: '/images/default-food.jpg'},
  founded: {
    type: Number,
    min: [1673, "Who did you serve? Dinosaurs?!"],
    max: [new Date().getFullYear(), "Are you from the future?!"]
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});


placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city} since ${this.founded}.`
};

module.exports = mongoose.model('Place', placeSchema);


/* module.exports = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/restaurant1.jpg',
    food: '/images/food1.jpg',
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/restaurant2.jpg',
    food: '/images/food2.jpg',
}]; */
