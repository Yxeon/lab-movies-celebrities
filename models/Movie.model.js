const mongoose = require("mongoose");

// Iteration #1
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
    },

    genre: {
        type: String,
    },
    plot: {
        type: String,
    },

    cast: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Celebrity",
    }]
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
