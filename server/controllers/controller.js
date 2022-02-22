var axios = require('axios');

var apiCall = (req,res) => {
    res.status(200).send({
        success: "true"
    });
};

var getTags = (req, res) => {
    var values = [
        "id",
        "author",
        "authorId",
        "likes",
        "popularity",
        "reads",
        "tags"
    ];
    var directions = ["asc", "desc"];

    if (values.indexOf(sortBy) === -1) {
        res.status(400).send({error: "Invalid parameter"});
    }
    if (directions.indexOf(direction) === -1) {
        res.status(400).send({error: "Invalid parameter"});
    }

    if (getTags.indexOf(',') !== -1) {
        let tagArray = tags.split(',');
        let getPaths = tagArray.map((tag, i) => {
            return axios.get(`http://hatchways.io/api/assessment/blog/posts?tag=${tag}&sortBy=${sortBy}&direction=${direction}`)
        });
        axios.all([...getPaths])
    }
}

axios.get('')
    .then
module.exports = { apiCall, getTags };