var request = require('supertest');
var app = require('../app');
var expect = require('chai').expect;
var db = require('../db/conf');
var thoughtsCollection = db.get('thoughts');

beforeEach(function(done) {
  thoughtsCollection.insert({
    description: 'I had a thought'
  }, function() {
    done();
  });
});

afterEach(function(done) {
  thoughtsCollection.remove({}, done)
});

describe('GET /thoughts', function() {
  it('should return a status code of 200', function(done) {
    request(app).get('/thoughts').expect(200, done);
  });

  it('should return an array of string-based thoughts', function(done) {
    request(app).get('/thoughts').expect(function(response) {
      var desc = {
        description: 'I had a thought'
      }
      expect(response.body[0].description).to.deep.equal(desc.description);
    }).end(done);
  });
});
