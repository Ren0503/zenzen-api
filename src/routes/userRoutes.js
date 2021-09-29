const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
    toggleSubscribe,
    getFeed,
    editUser,
    searchUser,
    getProfile,
    recommendChannels,
    getLikedVideos,
    getHistory,
} = require('../controllers/userController');

router.route('/')
    .put(protect, editUser)
    .get(protect, recommendChannels);

router.route('/likedVideos')
    .get(protect, getLikedVideos);

router.route('/history')
    .get(protect, getHistory);

router.route('/feed')
    .get(protect, getFeed);

router.route('/search')
    .get(protect, searchUser);

router.route('/:id')
    .get(protect, getProfile);

router.route('/:id/toggleSubscribe')
    .get(protect, toggleSubscribe);

module.exports = router;