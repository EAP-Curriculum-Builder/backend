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
    verifySessionCookie,
    createLearningController.getTopics
);

router.post('/exercises',
    verifySessionCookie,
    createLearningController.getExercisesAvailable
)

module.exports = router;