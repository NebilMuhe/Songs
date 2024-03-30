const mongoose = require("mongoose")
const Schema = mongoose.Schema

const allowedGenres = ['Pop', 'Rock', 'Hip Hop', 'Electronic', 'Classical','Other'];

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
    }
})


const SongModel = mongoose.model('Song',songSchema)


module.exports = SongModel