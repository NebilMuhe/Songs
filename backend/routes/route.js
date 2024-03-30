const express = require('express')
const {createSong,getSongs,getSingleSong,deleteSong,updateSong} = require('../controllers/controller')

const router = express.Router()

router.post('/',createSong) 
router.get('/',getSongs)
router.get('/:id',getSingleSong)
router.delete('/:id',deleteSong)
router.put('/:id',updateSong)

module.exports = router
