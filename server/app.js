var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var apicache = require("apicache");
var axios = require('axios');
var { apiCall, getTags } = require('./controllers/controller.js')
var PORT = process.env.PORT || 3002

app.use(bodyParser.json());
var cache = apicache.middleware;

app.use(express.static(path.join(__dirname, "../client/public")));

app.get("/api/ping", cache("60 minutes"), apiCall);
app.get("/api/posts/:tags/:sortBy?/:direction?", cache("60 minutes"), getTags);

app.listen(PORT, () => {
    console.log(`API server now on port http://localhost:${PORT}`);
})