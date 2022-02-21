var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000

// app.use(require('./routes'));

fetch('https://api.hatchways.io/assessment/blog/posts')
    .then(response => {
        return response.json();
    })
    .then(posts => {
        console.log(posts)
    });

app.listen(PORT, () => {
    console.log(`API server now on port http://localhost:${PORT}`);
})