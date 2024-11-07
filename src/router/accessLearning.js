const express = require('express')
const accessLearningController = require('../controllers/accessLearningController');
const { verifySessionCookie } = require('../controllers/authController');

const router = express.Router();
router.use(express.json());

router.get('/learningpaths',
    accessLearningController.getAllLearningPaths
);

module.exports = router;