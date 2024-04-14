const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

// Create user profile
router.post(
    '/createuser',
    [
        body('email', 'Incorrect email').isEmail(),
        body('name').isLength({ min: 5 }),
        body('password', 'Incorrect Password').isLength({ min: 5 }),
        body('location').notEmpty(),
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { email, name, password, location } = req.body;

            // Check if user already exists
            let user = await User.findOne({ email });
            if (user) {
                return res.status(409).json({ error: "User already exists" });
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create new user
            user = new User({
                name,
                email,
                password: hashedPassword,
                location,
            });

            await user.save();

            res.json({ success: true });
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Server Error');
        }
    }
);

module.exports = router;
