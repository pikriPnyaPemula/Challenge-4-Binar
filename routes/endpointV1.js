const express = require('express');
const router = express.Router();
const { createUser, getAllUser, getUserDetail } = require('../handlers/v1/user.js');

router.get('/', (req, res) =>{
    res.status(200).json({
        status: true,
        message: 'welcome',
        data: null
    });
});

router.post('/users', createUser);
router.get('/users', getAllUser);
router.get('/users/:id', getUserDetail);
module.exports = router;