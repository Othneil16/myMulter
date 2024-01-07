const mongoose = require('mongoose');
const mySchema = new mongoose.Schema({
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    childrenNames: {
        type: [String], 
        required: true
    },
    fatherPicture: {
        type: String, 
        required: true
    },
    motherPicture: {
        type: String,
        required: true
    },
    childrenPictures: {
        type: [String],
        required: true
    }
});

const userModel = mongoose.model('User', mySchema)

module.exports = userModel