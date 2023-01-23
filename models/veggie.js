const mongoose = require('mongoose')

const veggieSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number,
    readyToEat: Boolean
})

const MyVeggie = mongoose.model('Veggie', veggieSchema)

module.exports = MyVeggie;

