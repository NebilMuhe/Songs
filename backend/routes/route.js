const express = require('express')
const {createSong,getSongs,getSingleSong,deleteSong,updateSong} = require('../controllers/controller')
const validateID = require('../middleware/validateID')

const router = express.Router()

router.post('/',createSong) 
router.get('/',getSongs)
router.get('/:id',validateID,getSingleSong)
router.delete('/:id',validateID,deleteSong)
router.put('/:id',validateID,updateSong)

module.exports = router
