const Suggestion = require("../model/suggestionModel");

module.exports = {
    addSuggestion: (body, callback) => {
        const addSuggestion = new Suggestion ({
            title: body.title,
            author: body.author,
            suggestion: body.suggestion,
            likes: body.likes,
            anonymous: body.anonymous,
            timeCreated: body.timeCreated
        });
        addSuggestion.save((err, newsuggestion)=> {
            err ? callback(err, null) : callback(null, newsuggestion)
        });
    },

    getAllSuggestions: (body, callback) =>{
        Suggestion.find(body, (err, foundSuggestion) => {
            err ? callback(err, null) : callback(null, foundSuggestion)
        });
    },
    getSingleSuggestions: (id, callback) =>{
        Suggestion.findById(id, (err, foundSuggestion) => {
            err ? callback(err, null) : callback(null, foundSuggestion)
        });
    },

    updateSuggestion: (id, body, callback) => {
        Suggestion.findByIdAndUpdate(id,
            body, 
            {new: true},
            (err, updatedSuggestion) => {
                err ? callback(err, null) : callback(null, updatedSuggestion)
            });
    },

    deleteSuggestion: (id, callback) => {
        Suggestion.findByIdAndDelete(id, (err, updatedSuggestion) => {
            err ? callback(err, null) : callback(null, updatedSuggestion)
        });
    }


}
