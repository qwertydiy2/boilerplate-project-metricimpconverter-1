"use strict";

function ConvertHandler() {
  this.getNum = function (input) {
    var result = input.match(/[a-zA-Z]+|[^A-Za-z]+/g);
    console.log("🚀 ~ file: convertHandler.js ~ line 5 ~ ConvertHandler ~ result", result);

    if (isNaN(result[0]) == false) {
      return Number(result[0]);
    } else {
      fraction = result[0].split("/");

      if (fraction.length < 3) {
        if (fraction.length == 1) {
          return 1;
        } else {
          return Number(eval(result[0]));
        }
      } else {
        throw new Error("Invalid conversion");
      }
    }
  };

  this.getUnit = function (input) {
    var result = input.match(/[a-zA-Z]+|[^A-Za-z]+/g);
    console.log("🚀 ~ file: convertHandler.js ~ line 12 ~ ConvertHandler ~ result", result);

    if (result.length == 1) {
      throw new Error("No conversion unit");
    } else if (result[1].toLowerCase() == "gal" || result[1].toLowerCase() == "l" || result[1].toLowerCase() == "kg" || result[1].toLowerCase() == "lbs" || result[1].toLowerCase() == "km" || result[1].toLowerCase() == "mi") {
      return result[1];
    } else {
      throw new Error("Invalid conversion unit");
    }
  };

  this.getReturnUnit = function (input) {
    var result = input.match(/[a-zA-Z]+|[^A-Za-z]+/g);

    if (result.length == 1) {
      throw new Error("No conversion unit");
    } else {
      result = result[1].toLowerCase();
      console.log("🚀 ~ file: convertHandler.js ~ line 17 ~ ConvertHandler ~ result", result);

      if (result == "gal") {
        return "L";
      } else if (result == "l") {
        return "gal";
      } else if (result == "lbs") {
        return "Kg";
      } else if (result == "kg") {
        return "lbs";
      } else if (result == "mi") {
        return "Km";
      } else if (result == "km") {
        return "mi";
      } else {
        throw new Error("Invalid conversion unit");
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
    var number = Number(input.match(/[a-zA-Z]+|[^A-Za-z]+/g)[0].toLowerCase());
    console.log("🚀 ~ file: convertHandler.js ~ line 53 ~ ConvertHandler ~ number", number);
    var result = input.match(/[a-zA-Z]+|[^A-Za-z]+/g)[1].toLowerCase();
    console.log("🚀 ~ file: convertHandler.js ~ line 55 ~ ConvertHandler ~ result", result);

    if (result == "gal") {
      return number * galToL;
    } else if (result == "l") {
      return number / galToL;
    } else if (result == "lbs") {
      return lbsToKg * number;
    } else if (result == "kg") {
      return number / lbsToKg;
    } else if (result == "mi") {
      return miToKm * number;
    } else if (result == "km") {
      return number / miToKm;
    }
  };

  this.getString = function (input) {
    var number = Number(input.split(/[a-zA-Z]+[^A-Za-z]+/)[0].toLowerCase());
    var result = input.match(/[a-zA-Z]+|[^A-Za-z]+/g)[1].toLowerCase();
    return this.getNum(input) + " " + this.spellOutUnit(this.getUnit(input)) + " converts to " + this.convert(input) + " " + this.spellOutUnit(this.getReturnUnit(input));
  };
}

module.exports = ConvertHandler;