const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        refs: "user"
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "NA"
    }, 
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;