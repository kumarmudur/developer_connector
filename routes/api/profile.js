const express = require('express');
const router = express.Router();

// @route Get api/users/test
// @desc  Tests profile route
// @access Public
router.get('/test', (req, res) => {
    res.json({
        msg: 'Profile works!'
    });
});

module.exports = router;