const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
    newVideo,
    getVideo,
    likeVideo,
    dislikeVideo,
    addComment,
    newView,
    searchVideo,
} = require('../controllers/videoController');
const { recommendedVideos } = require('../controllers/userController');

router.route('/')
    .post(protect, newVideo)
    .get(recommendedVideos);

router.route('/search')
    .get(protect, searchVideo);

router.route('/:id')
    .get(protect, getVideo);

router.route('/:id/like')
    .get(protect, likeVideo);

router.route('/:id/dislike')
    .get(protect, dislikeVideo);

router.route('/:id/comment')
    .post(protect, addComment);

router.route('/:id/view')
    .get(protect, newView);

module.exports = router;