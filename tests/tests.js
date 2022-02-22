const expect  = require('chai').expect;
const request = require('request');
const axios = require('axios');

describe('blog-posts', function() {
    describe('Step 1', function() {
      it('Should return the correct body for step 1', function(done) {
          request('http://localhost:3002/api/ping', function(error, response, body) {
              expect(body).to.equal('{"success":"true"}');
              done();
          });
      });
      it('Should pass tests if all post ids are unique', function(done) {
        axios.get('http://localhost:3002/api/posts/tech,history')
        .then(res => {
          let post = res.data;
          let postID = [];
          let postObj = {};
          let test = true;
          for (let i = 0; i < post.length; i++) {
            postID.push(post[i].id)
          }
          postID.forEach(blog => {
            postObj[blog] = postObj[blog] ? postObj[blog] + 1 : 1
          })
          for (let key in postObj) {
            if (postObj[key] > 1) {
              test = false
            }
          }
          expect(test).to.equal(true);
          })
          .catch(error => {
            console.log(error)
          })
          done();
      });
      it('Should pass tests if all post ids are unique checking ids across all route parameters', function(done) {
        axios.get('http://localhost:3002/api/posts/tech,history/likes/asc')
        .then(res => {
          let post = res.data;
          let postID = [];
          let postObj = {};
          let test = true;
          for (let i = 0; i < post.length; i++) {
            postID.push(post[i].id)
          }
          postID.forEach(blog => {
            postObj[blog] = postObj[blog] ? postObj[blog] + 1 : 1
          })
          for (let key in postObj) {
            if (postObj[key] > 1) {
              test = false
            }
          }
          expect(test).to.equal(true);
          })
          .catch(error => {
            console.log(error)
          })
          done();
      });
      it('Should pass the test for correctly sorted values', function(done) {
        axios.get('http://localhost:3002/api/posts/tech,health/likes/desc')
        .then(res => {
          let post = res.data;
          let postLikes = [];
          let test = true;
          for (let i = 0; i < post.length; i++) {
            postLikes.push(post[i].likes)
          }
          for (let i = 0; i < postLikes.length; i++) {
            if (postLikes[i] < postLikes[i + 1]) {
              test = false;
            }
          }
          expect(test).to.equal(true);
          })
          .catch(error => {
            console.log(error)
          })
          done();
      });
      it('Should pass the test for correctly sorted values with the default parameters', function(done) {
        axios.get('http://localhost:3002/api/posts/tech,health')
        .then(res => {
          let post = res.data;
          let postID = [];
          let test = true;
          for (let i = 0; i < post.length; i++) {
            postID.push(post[i].id)
          }
          for (let i = 0; i < postID.length; i++) {
            if (postID[i] > postID[i + 1]) {
              test = false;
            }
          }
          expect(test).to.equal(true);
          })
          .catch(error => {
            console.log(error)
          })
          done();
      });
    });
});