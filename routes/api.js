'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
 app.get("/api/convert", function (req,res){
  let input=req.query.input
	res.json({ "initNum":convertHandler.getNum(input), "initUnit":convertHandler.getUnit(input),"returnNum":convertHandler.convert(input), "returnUnit":convertHandler.returnUnit(input),"string":convertHandler.getString(input)})
})}