"use strict";

function ConvertHandler() {
  this.getNum = function (input) {
    var result = input.match(/[a-zA-Z]+|[^A-Za-z]+/g);
    console.log("🚀 ~ file: convertHandler.js ~ line 5 ~ ConvertHandler ~ result", result);

    if (isNaN(result[0]) == false) {
      return Number(result[0]);
    } else {
      numberToSplit = result[0];
      fraction = numberToSplit.split("/");

      if (fraction.length < 3) {
        if (fraction.length == 1) {
          return 1;
        } else {
          return Number(eval(result[0]));
        }
      } else {
        return "Invalid conversion";
      }
    }
  };

  this.getUnit = function (input) {
    var result = input.match(/[a-zA-Z]+|[^A-Za-z]+/g);
    console.log("🚀 ~ file: convertHandler.js ~ line 12 ~ ConvertHandler ~ result", result);
    {
      var unit = result[result.length - 1];

      if (unit.toLowerCase() == "gal" || unit.toLowerCase() == "l" || unit.toLowerCase() == "kg" || unit.toLowerCase() == "lbs" || unit.toLowerCase() == "km" || unit.toLowerCase() == "mi") {
        if (unit.toLowerCase() != "l") {
          return unit.toLowerCase();
        } else {
          return "L";
        }
      } else {
        var toTestForUnit = result[0];

        if (result.length == 1 && toTestForUnit.match(/[a-zA-Z]+/) == null) {
          return "No conversion unit";
        } else {
          return "Invalid conversion unit";
        }
      }
    }
  };

  this.getReturnUnit = function (input) {
    var result = input.match(/[a-zA-Z]+|[^A-Za-z]+/g);

    if (result.length == 1 && result[0].match(/[a-zA-Z]+/) == null) {
      return "No conversion unit";
    } else {
      result = result[result.length - 1];
      var toTestForUnit = result[0];

      if (result.length == 1 && toTestForUnit.match(/[a-zA-Z]+/) == null) {
        return "No conversion unit";
      } else {
        result = result.toLowerCase();
      }

      console.log("🚀 ~ file: convertHandler.js ~ line 17 ~ ConvertHandler ~ result", result);

      if (result == "gal") {
        return "L";
      } else if (result == "l") {
        return "gal";
      } else if (result == "lbs") {
        return "kg";
      } else if (result == "kg") {
        return "lbs";
      } else if (result == "mi") {
        return "km";
      } else if (result == "km") {
        return "mi";
      } else {
        // let toTestForUnit = result[0];
        // if (result.length == 1 && toTestForUnit.match(/[a-zA-Z]+/) == null) {
        //   return "No conversion unit";
        // } else {
        return "Invalid conversion unit"; // }
      }
    }
  }; //find check for errors in chai assert.


  this.spellOutUnit = function (result) {
    //let result = input.match(/[a-zA-Z]+|[^a-zA-Z]+/g)[1].toLowerCase()
    result = result.toLowerCase();

    if (result == "gal") {
      return "gallons";
    } else if (result == "l") {
      return "litres";
    } else if (result == "lbs") {
      return "pounds";
    } else if (result == "kg") {
      return "kilograms";
    } else if (result == "mi") {
      return "miles";
    } else if (result == "km") {
      return "kilometers";
    }
  };

  this.convert = function (input) {
    var galToL = 3.78541;
    var lbsToKg = 0.453592;
    var miToKm = 1.60934;
    var number =
    /*Number(input.match(/[a-zA-Z]+|[^A-Za-z]+/g)[0].toLowerCase());
    console.log(
    "🚀 ~ file: convertHandler.js ~ line 53 ~ ConvertHandler ~ number",
    number
    );*/
    this.getNum(input);
    var result = input.match(/[a-zA-Z]+|[^A-Za-z]+/g);
    result = result[result.length - 1];
    result = result.toLowerCase();
    console.log("🚀 ~ file: convertHandler.js ~ line 55 ~ ConvertHandler ~ result", result);

    if (result == "gal") {
      return Math.round(number * galToL * 100000) / 100000;
    } else if (result == "l") {
      return Math.round(number / galToL * 100000) / 100000;
    } else if (result == "lbs") {
      return Math.round(lbsToKg * number * 100000) / 100000;
    } else if (result == "kg") {
      return Math.round(number / lbsToKg * 100000) / 100000;
    } else if (result == "mi") {
      return Math.round(miToKm * number * 100000) / 100000;
    } else if (result == "km") {
      return Math.round(number / miToKm * 100000) / 100000;
    }
  };

  this.getString = function (input) {
    var number = Number(input.split(/[a-zA-Z]+[^A-Za-z]+/)[0].toLowerCase());
    var result = input.match(/[a-zA-Z]+|[^A-Za-z]+/g);
    result = result[result.length - 1];
    result = result.toLowerCase();
    return this.getNum(input) + " " + this.spellOutUnit(this.getUnit(input)) + " converts to " + this.convert(input) + " " + this.spellOutUnit(this.getReturnUnit(input));
  };
}

module.exports = ConvertHandler;