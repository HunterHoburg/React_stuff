require('../helper');
var db = require('monk')('localhost/thoughts_db');
var thoughtsCollection = db.get('thoughts');

before(function() {
  browser.baseUrl = 'http://localhost:8080';
});

beforeEach(function(done) {
  thoughtsCollection.insert({
    description: 'What is our thought?'
  }, done);
  return browser.ignoreSynchronization = true;
});

afterEach(function(done) {
  thoughtsCollection.remove({}, done);
});
// User can see a list of thoughts
// User can add a thought to the list
//

describe('Thought Board', function() {
  it('I see the title', function() {
    browser.get('/thoughtboard.html');
    element(by.tagName('h1')).getText().then(function(text) {
      expect(text).to.equal('Thought Board');
    });
  });
  it('I can see a list of previous thoughts', function() {
    browser.get('/thoughtboard.html');
    element(by.tagName('p')).getText().then(function(text) {
      expect(text).to.equal('What is our thought?');
    });
  });
});
