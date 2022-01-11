import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import CONNECTION_URL from './protected.js';

const app = express();

//app.use(bodyParser.json({ limit: "30mb", extended: true}));
//app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const PORT = process.env.PORT || 5000;

//const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.8uiuw.mongodb.net/wikiHopper?retryWrites=true&w=majority`;

const url = CONNECTION_URL;
console.log(url);
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log("yes this:" + error.message));

//mongoose.set('useFindAndModify', false);