const SongModel = require("../models/songsModel")

const createSong = async(req,res)=>{
    const {title,artist,album,genre} = req.body
    const song = await SongModel.create({title,artist,album,genre})
    res.status(200).json(song)
}

const getSongs =  async(req,res)=>{
    const songs = await SongModel.find()
    res.status(200).json(songs)
}

module.exports = {
    createSong,
    getSongs,  
}