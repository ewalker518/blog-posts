var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var axios = require('axios');
var { apiCall, getTags } = require('./controllers/controller.js')
var PORT = process.env.PORT || 3002

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/public")));

// fetch('https://api.hatchways.io/assessment/blog/posts')
// .then(data => {
// return data.json();
// })
// .then(post => {
// console.log(post);
// });

app.listen(PORT, () => {
    console.log(`API server now on port http://localhost:${PORT}`);
})