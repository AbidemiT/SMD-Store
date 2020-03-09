const mongoose = require("mongoose");
const productImageSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        refs: "product"
    },
    image: {
        type: Buffer,
    }
}, {
    timestamps: true
})

const ProductImage = mongoose.model('ProductImage', productImageSchema);

module.exports = ProductImage;