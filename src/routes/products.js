const express = require("express");
const router = express.Router();
const multer = require("multer");
const auth = require("../middleware/auth");
const Product = require("../models/Product");
const User = require("../models/User");
const {
    check,
    validationResult
} = require('express-validator');

const upload = multer({
    // dest: "images",
    limits: {
        fileSize: "1000000"
    }
})

// @route GET api/products
// @desc Get All Products
// access Private

router.get("/", auth, async (req, res) => {
    const products = await Product.find({
        user: req.user.id
    });

    try {
        res.status(200).json({
            products
        });
    } catch (err) {
        res.status(500).json({
            err: "Server Error"
        });
    }
})

// @method POST api/products
// @desc Add new product
// @access Public

router.post("/", auth, upload.single("image"), [check("name", "Enter Product Name").not().isEmpty(), check("brand", "Enter product brand").not().isEmpty(), check("price", "Enter product price").not().isEmpty().isNumeric(), check("quantity", "Enter No of products available").not().isEmpty()], async (req, res) => {
    const {
        name,
        brand,
        price,
        quantity,
        description
    } = req.body;
    const {image} = req.file.buffer
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    try {
        const newProduct = await new Product({
            name,
            brand,
            image,
            price,
            quantity,
            description,
            user: req.user.id
        })

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({
            err: "Server Error"
        });
    }
})

// @method PUT api/products/
// @desc Update product
// @access Private

router.put("/:id", auth, async (req, res) => {
    const {
        name,
        image,
        brand,
        price,
        quantity,
        description
    } = req.body;
    const id = req.params.id

    //create product field
    const productFields = {};
    if (name) productFields.name = name;
    if (image) productFields.image = image;
    if (brand) productFields.brand = brand;
    if (price) productFields.price = price;
    if (quantity) productFields.quantity = quantity;
    if (description) productFields.description = description;

    try {
        let product = await Product.findById(id);
        if (!product) res.status(404).json({
            err: "Product not found"
        });

        if (product.user.toString() !== req.user.id) res.status(401).json({
            err: "Unauthorized Action"
        });

        product = await Product.findByIdAndUpdate(id, {
            $set: productFields
        }, {
            new: true
        });

        res.status(200).json({
            status: "Update Successful",
            product
        })
    } catch (error) {
        res.status(500).json({
            err: "Server Error"
        });
    }
})

// @method DELETE api/products/
// @desc Delete product
// @access Private

router.delete("/:id", auth, async(req, res) => {
    const id = req.params.id;
    try {
        let product = await Product.findById(id);
        if (!product) res.status(404).json({
            err: "Product not found"
        });

        if (product.user.toString() !== req.user.id) res.status(401).json({
            err: "Unauthorized Action"
        });

        await Product.findByIdAndRemove(id);

        res.status(200).json({
            status: "Delete Successful",
        })
    } catch (error) {
        res.status(500).json({
            err: "Server Error"
        });
    }
})



module.exports = router;