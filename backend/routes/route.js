const express = require('express')
const {createSong,getSongs,getSingleSong,deleteSong} = require('../controllers/controller')

const router = express.Router()

router.post('/',createSong) 
router.get('/',getSongs)
router.get('/:id',getSingleSong)
router.delete('/:id',deleteSong)

module.exports = router
