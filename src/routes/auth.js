const express = require("express");
const bcrypt = require("bcrypt");
const config = require("config");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth");
const User = require("../models/User");
const {
    check,
    validationResult
} = require('express-validator');

// @route GET api/auth
// @desc Get login user
// access Private

router.get("/",auth, async(req,res) => {
    const user = await User.findById(req.user.id).select("-password");
    try {
        res.status(200).json({user});
    } catch (error) {
        res.status(500).json({err: "Server Error"});
    } 
})

// @method POST api/auth
// @desc Login User
// @access Public

router.post("/",[check("email", "Email field is required").isEmail(),check("password", "Password field is required").exists()], async(req,res) => {
    const{email,password}  = req.body;

    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            errors: errors.array()
        });
    }

    try {
        let user = await User.findOne({email});

        if(!user) {
            return res.status(400).json({err: "Invalid Credentials"});
        }

        const isMatched = await bcrypt.compare(password, user.password);

        if(!isMatched) {
            return res.status(400).json({err: "Invalid Credentials"});
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get("jwtSecret"), {
            expiresIn: 3600
        }, ((err, token) => {
            if(err) {
                throw err;
            };

            res.status(200).json({
                status: "Success",
                user,
                token
            });
        }));
    } catch (error) {
        res.status(500).json({err: error.message});
    }
})

module.exports = router;