const chaiHttp = require('chai-http')
const chai = require('chai')
const assert = chai.assert
const server = require('../server')
const { get } = require('../server')
const ConvertHandler = require('../controllers/convertHandler.js')
const convertHandler = new ConvertHandler()
chai.use(chaiHttp)
suite('Functional Tests', function () {
  suite('Valid Inputs', function () {
    test('convert a valid input', function (done) {
      chai
        .request(server)
        .get('/api/convert?input=10L')
        .end(function (err, res) {
          assert.equal(res.status, 200)
          assert.equal(
            res.text,
            '{"initNum":10,"initUnit":"L","returnNum":2.64172,"returnUnit":"gal","string":"10 litres converts to 2.64172 gallons"}'
          )
        })
      chai
        .request(server)
        .get('/api/convert?input=10gal')
        .end(function (err, res) {
          assert.equal(res.status, 200)
          assert.equal(
            res.text,
            '{"initNum":10,"initUnit":"gal","returnNum":37.8541,"returnUnit":"L","string":"10 gallons converts to 37.8541 litres"}'
          )
        })
      chai
        .request(server)
        .get('/api/convert?input=10kg')
        .end(function (err, res) {
          assert.equal(res.status, 200)
          assert.equal(
            res.text,
            '{"initNum":10,"initUnit":"kg","returnNum":22.04624,"returnUnit":"lbs","string":"10 kilograms converts to 22.04624 pounds"}'
          )
        })
      done()
    })
  })
  suite('Invalid inputs', function () {
    test('convert an invalid input', function (done) {
      chai
        .request(server)
        .get('/api/convert?input=2763galons')
        .end(function (err, res) {
          // assert.equal(res.status, 200);

          assert.equal(res.text, 'Invalid unit')
          done()
        })
      test('convert an invalid number', function (done) {
        chai
          .request(server)
          .get('/api/convert?input=3/9/2kg')
          .end(function (err, res) {
            assert.equal(res.status, 200)
            assert(
              assert.equal(res.text, 'Invalid number') ||
                assert.throws(function () {
                  convertHandler.getString('3/9/2kg')
                }, Error)
            )
            done()
          })
        test('convert an invalid number and unit', function (done) {
          chai
            .request(server)
            .get('/api/convert?input=3/9/2kgvthnh')
            .end(function (err, res) {
              assert.equal(res.status, 200)
              assert(
                assert.equal(res.text, 'Invalid number and unit') ||
                  assert.throws(() => {
                    convertHandler.getString('3/9/2kgvthnh')
                  }, Error)
              )
              done()
            })
        })
      })
    })
  })
  suite('No Number Tests', function (done) {
    test('convert with no number', function (done) {
      chai
        .request(server)
        .get('/api/convert?input=mi')
        .end(function (err, res) {
          assert.equal(res.status, 200)
          assert.equal(
            res.text,
            '{"initNum":1,"initUnit":"mi","returnNum":1.60934,"returnUnit":"km","string":"1 miles converts to 1.60934 kilometers"}'
          )
          done()
        })
    })
  })
})
