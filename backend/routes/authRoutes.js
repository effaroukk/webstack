const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Test route to verify API
router.get('/test', (req, res) => {
    res.send('Auth route working');
});

module.exports = router;

