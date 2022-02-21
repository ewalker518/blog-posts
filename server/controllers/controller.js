import axios from 'axios';

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
    ]
}
module.exports = { apiCall, getTags };