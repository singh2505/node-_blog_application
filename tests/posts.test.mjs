import { expect } from 'chai';
import request from 'chai-http';
import app from '../index'; // Assuming your Express app is exported from index.js

chai.use(request);

describe('Posts API', () => {
  let postId;

  // Test for creating a new post
  it('should create a new post', (done) => {
    chai.request(app)
      .post('/api/posts')
      .send({ title: 'Test Post', content: 'This is a test post' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('title', 'Test Post');
        expect(res.body).to.have.property('content', 'This is a test post');
        postId = res.body._id; // Save the post ID for future tests
        done();
      });
  });

  // Test for getting all posts
  it('should get all posts', (done) => {
    chai.request(app)
      .get('/api/posts')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  // Test for getting a single post
  it('should get a single post', (done) => {
    chai.request(app)
      .get(`/api/posts/${postId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('title', 'Test Post');
        expect(res.body).to.have.property('content', 'This is a test post');
        done();
      });
  });

  // Test for updating a post
  it('should update a post', (done) => {
    chai.request(app)
      .put(`/api/posts/${postId}`)
      .send({ title: 'Updated Post', content: 'This is an updated post' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('title', 'Updated Post');
        expect(res.body).to.have.property('content', 'This is an updated post');
        done();
      });
  });

  // Test for deleting a post
  it('should delete a post', (done) => {
    chai.request(app)
      .delete(`/api/posts/${postId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'Post deleted successfully!');
        done();
      });
  });
});
