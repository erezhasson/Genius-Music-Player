const dotenv = require('dotenv')
const http = require('http')
const axios = require("axios").default

dotenv.config();

var options = {
  method: 'GET',
  url: 'https://genius.p.rapidapi.com/search',
  params: {q: null},
  headers: {
    'x-rapidapi-host': process.env.HOST,
    'x-rapidapi-key': process.env.API_KEY
  }
};

const serachURI = 'https://genius.p.rapidapi.com/search';

exports.getSong = (req, res) => {
	const id = req.params.songId;
	console.log(id)
	const artistURI = `https://genius.p.rapidapi.com/songs/${id}`

	options.url = artistURI;
	axios.request(options).then(function (response) {
		const data = response.data;

		console.log(data);
		res.json({ data })
	}).catch(function (error) {
		res.status(404).json({
			error: {
				status: error.status,
				message: "error has occured, please try again."
			}})
	});
};

exports.getLyricsMeaning = (req, res) => {
	const reqParams = req.params;
	console.log(reqParams.songId)
	const lyricsMeta = {
		song: reqParams.songId,
		line: reqParams.lineId,
		song_name: reqParams.songName,
		lyrics: reqParams.plainLyrics
	}

	const lyricsURI = `https://genius-song-lyrics1.p.rapidapi.com/songs/${lyricsMeta.song}/lyrics/${lyricsMeta.line}/${lyricsMeta.song_name}/${lyricsMeta.lyrics}`

	options.url = lyricsURI;
	axios.request(options).then(function (response) {
		const data = response.data;

		console.log(data);
		res.json({ data })
	}).catch(function (error) {
		res.status(404).json({
			error: {
				status: error.status,
				message: "error has occured, please try again."
			}})
	});
};


exports.getArtistSongs = (req, res) => {
	const id = req.params.artistId;
	console.log(id)
	const artistURI =  `https://genius.p.rapidapi.com/artists/${id}/songs`

	options.url = artistURI;
	axios.request(options).then(function (response) {
		const data = response.data;

		console.log(data);
		res.json({ data })
	}).catch(function (error) {
		res.status(404).json({
			error: {
				status: error.status,
				message: "error has occured, please try again."
			}})
	});
};


exports.search = (req, res) => {
	const keyword = req.body.keyword;

	options.params.q = keyword;
	options.url = serachURI;

	axios.request(options).then(function (response) {
		const data = response.data;

		console.log(data);
		res.json({ data })
	}).catch(function (error) {
		res.status(404).json({
			error: {
				status: error.status,
				message: "error has occured, please try again."
			}})
	});
};
