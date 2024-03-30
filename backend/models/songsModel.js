const mongoose = require("mongoose")
const Schema = mongoose.Schema

const allowedGenres = ['pop', 'rock', 'hip hop', 'electronic', 'classical','other'];

const songSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    artist:{
        type: String, 
        required:true
    },
    album: {
        type: Number,
        required:true
    },
    genre:{
        type: String,
        required:true,
        enum: allowedGenres,
        validate: { 
            validator: (value) => allowedGenres.includes(value.toLowerCase()),
            message: 'Genre must be one of the allowed genres'
        }
    }
})


const SongModel = mongoose.model('Song',songSchema)


module.exports = SongModel