const express = require('express');
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        if (global.food_items && global.foodCategory) {
            console.log("Food items:", global.food_items);
            console.log("Food categories:", global.foodCategory);
            res.json({ food_items: global.food_items, foodCategory: global.foodCategory });
        } else {
            console.log("Data not available");
            res.status(500).send("Server error: Data not available");
        }
    } catch (error) {
        console.error("Error in /foodData route:", error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
