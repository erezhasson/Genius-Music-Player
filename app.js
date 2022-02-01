const express = require('express')
const morgan = require("morgan")
const bodyParser = require('body-parser')
const app = express()
const appRoutes = require('./routes/appRoutes')
const dotenv = require('dotenv');
 
dotenv.config();

app.use(morgan("dev"));

app.use(bodyParser.json());

app.use('/', appRoutes);

const port = process.env.PORT;

app.listen(port, () => console.log(`Server listening on port ${port}...`));