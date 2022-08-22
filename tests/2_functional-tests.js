const chaiHttp = require("chai-http");
const chai = require("chai");
let assert = chai.assert;
const server = require("../server");
const { get } = require("../server");

chai.use(chaiHttp);

suite("Functional Tests", function () {
  suite("Valid Inputs", function () {
    test("convert a valid input", function (done) {
        chai
        .request(server)
        .get("/api/convert?input=10L")
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(
            res.text,
            '{"initNum":10,"initUnit":"L","returnNum":2.6417217685798895,"returnUnit":"gal","string":"10 litres converts to 2.6417217685798895 gallons"}'
            );
        });
        chai
        .request(server)
        .get("/api/convert?input=10gal")
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(
            res.text,
            '{"initNum":10,"initUnit":"gal","returnNum":37.8541,"returnUnit":"L","string":"10 gallons converts to 37.8541 litres"}'
            );
        });
        chai
        .request(server)
        .get("/api/convert?input=10kg")
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(
            res.text,
            '{"initNum":10,"initUnit":"kg","returnNum":22.046244201837776,"returnUnit":"lbs","string":"10 kilograms converts to 22.046244201837776 pounds"}'
            );
        });
        chai
        .request(server)
        .get("/api/convert?input=10lbs")
        .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(
            res.text,
            '{"initNum":10,"initUnit":"lbs","returnNum":4.53592,"returnUnit":"Kg","string":"10 pounds converts to 4.53592 kilograms"}'
            );
            chai
            .request(server)
            .get("/api/convert?input=10km")
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(
                res.text,
                '{"initNum":10,"initUnit":"km","returnNum":6.213727366498068,"returnUnit":"mi","string":"10 kilometers converts to 6.213727366498068 miles"}'
                );

            });
            chai
            .request(server)
            .get("/api/convert?input=10mi")
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(
                res.text,
                '{"initNum":10,"initUnit":"mi","returnNum":16.0934,"returnUnit":"Km","string":"10 miles converts to 16.0934 kilometers"}'
                );

            });
            done();
        });
    });
    test('convert an invalid input', function (done) {
        chai
        .request(server)
        .get("/api/convert?input=invalidgal")
        .end(function (err, res) {
            assert.notEqual(res.status, 200);
            assert.include(
                res.text,
                'Not Found'
            );
        });
    })
  });
});
