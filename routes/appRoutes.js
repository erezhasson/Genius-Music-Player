const musicController = require("../controllers/musicController")
const express = require('express')
const router = express.Router();

router.get('/', musicController.search);

router.get('/artists/:artistId', musicController.getArtistSongs)

router.get('/songs/:songId', musicController.getSong)

router.get('/songs/:songId/lyrics/:lineId/:songName/:plainLyrics', musicController.getLyricsMeaning)

module.exports = router;