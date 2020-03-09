const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const ProductImage = require("../models/ProductImage");
const Product = require("../models/Product");
const multer = require("multer");

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error("Please Upload an Image"));
        }

        cb(undefined, true);
    }
})


// @method Post api/product/image
// @desc Add product Image
// @access Private 

router.post("/", auth, upload.single("image") , async (req, res) => {
    
    const id = req.body.id;
    const file = req.file;
    const {
        name,
        brand,
        price,
        quantity,
        description
    } = req.body;

    const productField = {};
    if (name) productField.name = name;
    if (file) productField.image = file.buffer;
    if (brand) productField.brand = brand;
    if (price) productField.price = price;
    if (quantity) productField.quantity = quantity;
    if (description) productField.description = description;
    if (file) productField.image = file.buffer;

    try {
        let product = await Product.findById(id);
        if (!product) res.status(404).json({
            err: "Product not found"
        });

        if (product.user.toString() !== req.user.id) res.status(401).json({
            err: "Unauthorized Action"
        });

        product = await Product.findByIdAndUpdate(id, {
            $set: productField
        }, {
            new: true
        });

        res.status(200).json({
            product
        })
    } catch (error) {
        res.status(500).json({
            err: error.message
        });
    }
    
})

module.exports = router;