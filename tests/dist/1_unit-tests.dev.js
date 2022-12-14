"use strict";

var chai = require("chai");

var assert = chai.assert;

var ConvertHandler = require("../controllers/convertHandler.js");

var convertHandler = new ConvertHandler();
suite("Unit Tests", function () {
  suite("getNum", function () {
    test("accept whole number", function () {
      assert.equal(convertHandler.getNum("4gal"), 4);
    });
    test("accept decimal number", function () {
      assert.equal(convertHandler.getNum("0.4gal"), 0.4);
    });
    test("accept fractional number", function () {
      assert.equal(convertHandler.getNum("1/2gal"), 0.5);
    });
    test("accept fractional number with decimal", function () {
      assert.equal(convertHandler.getNum("1/2.5gal"), 0.4);
    });
    test("error when converting double fractional number", function () {
      //assert.instanceOf(convertHandler.getNum('1/2.5/4'),Error)
      assert.equal(convertHandler.getNum("1/4/6gal"), "Invalid conversion");
    });
    test("accept no number", function () {
      assert.equal(convertHandler.getNum("gal"), 1);
    });
  });
  suite("getUnit", function () {
    test("accept all valid input units", function () {
      assert.equal(convertHandler.getUnit("4gal"), "gal");
      assert.equal(convertHandler.getUnit("4L"), "L");
      assert.equal(convertHandler.getUnit("4mi"), "mi");
      assert.equal(convertHandler.getUnit("4km"), "km");
      assert.equal(convertHandler.getUnit("5lbs"), "lbs");
      assert.equal(convertHandler.getUnit("5kg"), "kg");
    });
    test("throw an error when converting invalid units", function () {
      assert.equal(convertHandler.getUnit("4invalid"), "Invalid conversion unit");
      assert.equal(convertHandler.getUnit("invalid"), "Invalid conversion unit");
      assert.equal(convertHandler.getUnit("40"), "No conversion unit");
    });
  });
  suite("getReturnUnit", function () {
    test("accept all valid input units", function () {
      assert.equal(convertHandler.getReturnUnit("4gal"), "L");
      assert.equal(convertHandler.getReturnUnit("4L"), "gal");
      assert.equal(convertHandler.getReturnUnit("4mi"), "km");
      assert.equal(convertHandler.getReturnUnit("4km"), "mi");
      assert.equal(convertHandler.getReturnUnit("9lbs"), "kg");
      assert.equal(convertHandler.getReturnUnit("7kg"), "lbs");
    });
    test("throw an error when returning invalid units", function () {
      assert.equal(convertHandler.getReturnUnit("4invalid"), "Invalid conversion unit");
      assert.equal(convertHandler.getReturnUnit("invalid"), "Invalid conversion unit");
      assert.equal(convertHandler.getReturnUnit("40"), "No conversion unit");
    });
  });
  suite("spellOutUnit", function () {
    test("spell out all input units", function () {
      assert.equal(convertHandler.spellOutUnit("gal"), "gallons");
      assert.equal(convertHandler.spellOutUnit("L"), "litres");
      assert.equal(convertHandler.spellOutUnit("mi"), "miles");
      assert.equal(convertHandler.spellOutUnit("km"), "kilometers");
      assert.equal(convertHandler.spellOutUnit("lbs"), "pounds");
      assert.equal(convertHandler.spellOutUnit("kg"), "kilograms");
    });
    suite("convert", function () {
      test("convert gals to Ls", function () {
        assert.approximately(convertHandler.convert("4gal"), 15.14165, 0.0001);
      });
      test("convert Ls to gals", function () {
        assert.approximately(convertHandler.convert("4L"), 1.056688, 0.0001);
      });
      test("convert mis to kms", function () {
        assert.approximately(convertHandler.convert("5mi"), 8.04672, 0.0001);
      });
      test("convert kms to mis", function () {
        assert.approximately(convertHandler.convert("5km"), 3.106856, 0.0001);
      });
      test("convert lbs to kgs", function () {
        assert.approximately(convertHandler.convert("7lbs"), 3.175147, 0.0001);
      });
      test("convert kgs to lbs", function () {
        assert.approximately(convertHandler.convert("7kg"), 15.43236, 0.0001);
      });
    });
  });
});