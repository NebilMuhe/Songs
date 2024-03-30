const express = require('express')
const {createSong,getSongs} = require('../controllers/controller')

const router = express.Router()

router.post('/',createSong) 
router.get('/',getSongs)

module.exports = router
