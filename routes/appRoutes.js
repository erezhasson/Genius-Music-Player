const musicController = require("../controllers/musicController")
const express = require('express')
const router = express.Router();

router.get('/', musicController.search);

module.exports = router;