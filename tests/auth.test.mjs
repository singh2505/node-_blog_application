import chai from 'chai';
import { expect } from 'chai';

import chaiHttp from 'chai-http';
import '../api/index.js';
 // Assuming your Express app is exported from index.js
 



// Configure iChai to use chai-http
chai.use(chaiHttp);
const expect = chai.expect;

describe('Authentication API', () => {
  it('should register a new user', (done) => {
    chai.request(app)
      .post('/api/register')
      .send({ username: 'testuser', email: 'test@example.com', password: 'password' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('message').equal('User registered successfully!');
        done();
      });
  });

  it('should log in an existing user', (done) => {
    chai.request(app)
      .post('/api/login')
      .send({ username: 'testuser', password: 'password' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message').equal('Login successful!');
        done();
      });
  });

  it('should log out a logged-in user', (done) => {
    chai.request(app)
      .post('/api/logout')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('message').equal('Logged out successfully!');
        done();
      });
  });

  
});
