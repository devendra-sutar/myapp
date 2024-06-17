var request = require('supertest');
var app = require('../index.js');

describe('GET /', function() {
  it('respond with 404 page not found', function(done) {
    request(app)
      .get('/nonexistentpage')
      .expect(404)
      .end(function(err, res) {
        if (err) {
          console.error(err);
          return done(err);
        }
        done();
      });
  });
});

