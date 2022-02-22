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
        .then(
            axios.spread((tag1, tag2, tag3, tag4, tag5, tag6, tag7, tag8, tag9) => {
                let data = [];
                let post = {};
                let posts = [];

                for (let i = 0; i < data.length; i++) {
                    let blog = data[i];
                    for (let i = 0; i < blog.length; i++) {
                      post[blog[i].id] = blog[i];
                    }
                }
                for (let key in post) {
                    posts.push(post[key]);
                  }
                  if (sortBy) {
                    if (direction === 'desc') {
                      posts = posts.sort((a, b) => (b[sortBy] > a[sortBy]) ? 1 : -1);
                    } else {
                      posts = posts.sort((a, b) => (b[sortBy] < a[sortBy]) ? 1 : -1);
                    }
                  }
                  res.status(200).send(posts);
            })
        )
        .catch((error) => {
            res.status(400).send({
              error: "Tags parameter is required",
            });
            console.log(error);
          });
    } else {
        axios.get(`http://hatchways.io/api/assessment/blog/posts?tag=${tags}&sortBy=${sortBy}&direction=${direction}`)
        .then((request) => {
            let data = request.data.posts;
        })
        .catch((error) => {
            res.status(400).send({
              error: "Tags parameter is required",
            });
            console.log(error);
          });
    }
};

module.exports = { apiCall, getTags };