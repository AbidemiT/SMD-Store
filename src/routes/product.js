const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Product = require("../models/Product");
const User = require("../models/User");


// @route GET api/products/all
// @desc Get slected Product
// access Public

router.get("/:id", async (req, res) => {
    const product = await Product.findById(req.params.id);

    if(!product) {
        res.status(404).json({err: "Product not found"});
    }

    try {
        res.status(200).json({
            product
        });
    } catch (err) {
        res.status(500).json({
            err: "Server Error"
        });
    }
})



module.exports = router;