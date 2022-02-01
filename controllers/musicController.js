const dotenv = require('dotenv')
const http = require('http')
const axios = require("axios").default

var options = {
  method: 'GET',
  url: 'https://genius.p.rapidapi.com/search',
  params: {q: null},
  headers: {
    'x-rapidapi-host': 'genius.p.rapidapi.com',
    'x-rapidapi-key': '1a3af26fdbmshe64c5168fd8bde6p11a97ejsn3297a4d426ab'
  }
};


const searchPrefix = "/search?q=";

exports.search = (req, res) => {
	const keyword = req.body.keyword;

	console.log(keyword)
	options.params.q = keyword;
	console.log(options)
	axios.request(options).then(function (response) {
		const data = response.data;

		console.log(data);
		res.json({ data })
	}).catch(function (error) {
		console.error(error);
	});
};
