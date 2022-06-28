const mongoose = require("mongoose");

// Iteration #1
const celebritySchema = new mongoose.Schema({
    name: {
        type: String,
    },

    occupation: {
        type: String,
    },
    catchp: {
        type: String,
    }
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);
module.exports = Celebrity;