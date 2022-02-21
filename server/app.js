import express from 'express';
var app = express();
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import axios from 'axios';
import { apiCall, getTags } from './controllers/controller.js';
var PORT = process.env.PORT || 3002

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/public")));

fetch('https://api.hatchways.io/assessment/blog/posts')
.then(data => {
return data.json();
})
.then(post => {
console.log(post);
});

app.listen(PORT, () => {
    console.log(`API server now on port http://localhost:${PORT}`);
})