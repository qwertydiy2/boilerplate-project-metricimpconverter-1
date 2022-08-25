'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
 app.get("/api/convert", function (req,res){
  let input=req.query.input
  console.log("🚀 ~ file: api.js ~ line 13 ~ convertHandler.convert", convertHandler.convert)
	/*try {
	var x = convertHandler.getUnit(input)
		var y = convertHandler.getNum(input)
	} catch(error) {
		if(error){
		try {
			var x = convertHandler.getUnit(input)
		} catch(error) {
			if(error)
			try {
				var y = convertHandler.getNum(input)
				res.text('invalid unit')
			} catch(error) {
				res.text('invalid number and unit')
			}
		} try {
			var y = convertHandler.getNum(input)
		} catch {
				res.text('invalid number')
		}
	}
	}*/
		if (convertHandler.getNum() != "Invalid conversion unit") {
	  if (convertHandler.getUnit() != "No conversion unit") {
	    res.json({
	      initNum: convertHandler.getNum(input),
	      initUnit: convertHandler.getUnit(input),
	      returnNum: convertHandler.convert(input),
	      returnUnit: convertHandler.getReturnUnit(input),
	      string: convertHandler.getString(input),
	    });
	  } else {
	    res.text("invalid number");
	  }
	} else {
	  if (convertHandler.getUnit() != "No conversion unit") {
	    res.text("invalid unit");
	  } else {
	    res.text("invalid number and unit");
	  }
	}
	})
}