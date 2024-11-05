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

module.exports = {
    getLearningGenres,
}