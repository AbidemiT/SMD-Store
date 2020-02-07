const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Product = require("../models/Product");
const User = require("../models/User");
const {
    check,
    validationResult
} = require('express-validator');

// @route GET api/products
// @desc Get All Products
// access Private

router.get("/",auth, async(req,res) => {
    const products = await Product.find({user: req.user.id});
    
    try {
        res.status(200).json({products});
    } catch (err) {
        res.status(500).json({err: "Server Error"});
    }
})

// @method POST api/products
// @desc Add new product
// @access Public

router.post("/",auth,[check("name","Enter Product Name").not().isEmpty(), check("brand", "Enter product brand").not().isEmpty(),check("price", "Enter product price").not().isEmpty().isNumeric(), check("quantity", "Enter No of products available").not().isEmpty()], async(req,res) => {
    const {name, image, brand, price, quantity, description} = req.body;
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
        res.status(500).json({err: "Server Error"});
    }
})

// @method PUT api/products/
// @desc Update product
// @access Private

router.put("/:id", (req,res) => {
    res.send("Update Product");
})

// @method DELETE api/products/
// @desc Delete product
// @access Private

router.delete("/:id", (req,res) => {
    res.send("Delete Product");
})



module.exports = router;
