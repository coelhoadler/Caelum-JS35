const express = require('../../custom-express')();
const supertest = require('supertest')(express);

describe("Testando retorno JSON e HTML", function() {

  it("Retorno tem que ser JSON", function(done) {
    supertest
      .get('/produtos')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done)
  })

  it("Retorno tem que ser HTML", function(done) {
    supertest
      .get('/produtos')
      .set('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done)
  })

})
