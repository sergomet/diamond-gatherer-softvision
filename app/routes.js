const express = require('express');
const router = express.Router();

const views = __dirname + '/views';

router.get('/', function (req, res) {
	res.sendFile(views + '/index.html');
});
router.get('/game', function (req, res) {
	res.sendFile(views + '/game.html');
});

module.exports = router;
