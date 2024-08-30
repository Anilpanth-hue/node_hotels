const mongoose = require('mongoose');

const menuItemScheme = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true, 
    },
    taste: {
        type: String,
        enum: ['sweet','spicy','sour'],
        required: true,
    },
    is_drink: {
      type: Boolean,
      default: false,  
    },
    ingredients: {
        type: [String],
        default: [],
    },
    num_sales: {
        type: Number,
        default: 0
    }
})

const MenuItem = mongoose.model('MenuItem', menuItemScheme);

module.exports = MenuItem;


// {
//     "name": "Spice Soya wings",
//     "price": 19.99,
//     "taste": "spciy",
//     "is_drink": false,
//     "ingredients": [
//         "soya wings",
//         "spices",
//         "sauce"
//     ],
//     "num_sales": 62
// }
