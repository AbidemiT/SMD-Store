const express = require("express");
const router = express.Router();

// @route GET api/brands
// @desc Get All Brands
// access Public

router.get("/", (req, res) => {
    res.status(200).json({status: "Successful",
        brands: [
        {
            value: "apple",
            name: "Apple",
            id: 1
        },
        {
            value: "samsung",
            name: "Samsung",
            id: 2
        },
        {
            value: "nokia",
            name: "Nokia",
            id: 3
        },
        {
            value: "huawei",
            name: "Huawei",
            id: 4
        },
        {
            value: "tecno",
            name: "Tecno",
            id: 5
        },
        {
            value: "infinix",
            name: "Infinix",
            id: 6
        }
    ]})
})



module.exports = router;