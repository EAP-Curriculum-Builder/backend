const express = require("express");
const createLearningController = require('../controllers/createLearningController');
const { verifySessionCookie } = require('../controllers/authController');

const router = express.Router();
router.use(express.json());

router.get('/learning',
    verifySessionCookie,
    createLearningController.getLearningGenres
);

router.post('/topics',
    createLearningController.getTopics
)

module.exports = router;