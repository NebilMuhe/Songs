const SongModel = require("../models/songsModel")
const asyncWrapper = require('../middleware/asyncWrapper')  
const { createCustomError } = require('../error/customError')
const { getStats } = require("../utils/statistics")

const createSong = asyncWrapper(async(req,res)=>{
    const {title,artist,album,genre} = req.body
    const song = await SongModel.create({title,artist,album,genre})
    res.status(200).json(song)
})

const getSongs =  asyncWrapper(async(req,res)=>{
    const songs = await SongModel.find()
    res.status(200).json(songs)
})

const getSingleSong = asyncWrapper(async(req,res,next)=>{
    const {id} = req.params;
    const song = await SongModel.findOne({_id:id})
    if(!song) 
       return next(createCustomError("no task found",404))
    return res.status(200).json(song)
})

const deleteSong = asyncWrapper(async(req,res,next)=>{
    const {id} = req.params
    const song = await SongModel.findOneAndDelete({_id:id})
    if(!song)  return next(createCustomError("no song found with this id",404))
    res.status(200).json(song)
})


const updateSong = asyncWrapper(async(req,res,next)=>{
    const {id} = req.params
    const song = await SongModel.findOneAndUpdate({_id:id},req.body,{
        new:true,
        runValidators: true
    })
    console.log(song);
    if(!song)  return next(createCustomError("no song found with this id",404))
    res.status(200).json(song)
})

const songStatistics = asyncWrapper(async (req, res) => {
      const stats = await getStats();
      res.status(200).json(stats);
  })



module.exports = {
    createSong,
    getSongs, 
    getSingleSong,
    deleteSong, 
    updateSong,
    songStatistics,
}