const AccessLearningModel = require('../models/accessLearningModel');

const getAllLearningPaths = async (req, res) => {
    //const decodedUri = decodeURIComponent(req.query.uid);
    try {
        const accessLearning = new AccessLearningModel();
        const learningPathsData = await accessLearning.getAllLearningPaths(req.query.uid);
        res.status(200).json(learningPathsData);
    } catch (error) {
        console.log("There was an error getting your learning paths", error);
        res.status(500).json({ message: "There was an error getting your learning paths" });
    }
}

module.exports = {
    getAllLearningPaths
}