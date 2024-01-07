const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const { signUp } = require('../controllers/userController');

router.post('/signup', upload.fields([
    { name: 'fatherPicture', maxCount: 1 },
    { name: 'motherPicture', maxCount: 1 },
    { name: 'childrenPictures', maxCount: 7 } 
]), signUp);

module.exports = router;