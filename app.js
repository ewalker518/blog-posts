import express from 'express';
var app = express();
import fetch from 'node-fetch';
var bodyParser = require('body-parser');
const axios = require('axios');
var PORT = process.env.PORT || 3002

// app.use(require('./routes'));
app.use(bodyParser.json());

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