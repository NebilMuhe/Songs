const express = require('express')
const {createSong} = require('../controllers/controller')

const router = express.Router()

router.post('/',createSong) 

