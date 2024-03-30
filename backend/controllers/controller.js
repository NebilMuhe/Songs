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

const getSingleSong = async(req,res,next)=>{
    const {id} = req.params;
    const song = await SongModel.findOne({_id:id})
    if(!song) 
       return next(createCustomError("No Task Found.",404))
    return res.status(200).json(song)
}

const deleteSong = async(req,res)=>{
    const {id} = req.params
    const song = await SongModel.findOneAndDelete({_id:id})
    if(!task) return res.status(404).json({msg:"no song found with this id"})
    res.status(200).json(song)
}

module.exports = {
    createSong,
    getSongs, 
    getSingleSong,
    deleteSong, 
}