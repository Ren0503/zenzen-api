const express = require('express');
const router = express.Router();
const { admin, protect } = require('../middleware/authMiddleware');
const {
    getUsers,
    removeUser,
    getVideos,
    removeVideo,
} = require('../controllers/adminController');

router.route('/users')
    .get(protect, admin, getUsers);

router.route('/users/:username')
    .delete(protect, admin, removeUser);
    
router.route('/videos')
    .get(protect, admin, getVideos);

router.route('/videos/:id')
    .delete(protect, admin, removeVideo);

module.exports = router;