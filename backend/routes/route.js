const express = require('express')
const {createSong,getSongs,getSingleSong} = require('../controllers/controller')

const router = express.Router()

router.post('/',createSong) 
router.get('/',getSongs)
router.get('/:id',getSingleSong)

module.exports = router
