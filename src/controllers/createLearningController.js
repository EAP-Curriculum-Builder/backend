const createLearningModel = require('../models/createLearningModel');

const getLearningGenres = async (req, res) => {
    try {
        const createLearning = new createLearningModel();
        const learningGenres = await createLearning.getLearningGenres();
        res.status(200).json(learningGenres);
    } catch (error) {
        console.log('It seems there was an error', error);
        res.status(500).json({ message: 'something went wrong! Dont know what!' });
    }
}

const getTopics = async (req, res) => {
    console.log("The request is:", req.body);
    try {
        
        const createLearning = new createLearningModel();
        const associatedTopics = await createLearning.getAssociatedTopics(req.body.id);
        res.status(200).json(associatedTopics);
    } catch (error) {
        console.log('It seems there was an error getting topics', error);
        res.status(500).json({ message: 'something went wrong, but not sure what' });
    }
}

module.exports = {
    getLearningGenres,
    getTopics
}