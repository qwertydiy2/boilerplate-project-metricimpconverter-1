'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();
 app.get("/api/convert", function (req,res){
  let input=req.query.input
  console.log("🚀 ~ file: api.js ~ line 13 ~ convertHandler.convert", convertHandler.convert)
	res.json({ "initNum":convertHandler.getNum(input), "initUnit":convertHandler.getUnit(input),"returnNum":convertHandler.convert(input), "returnUnit":convertHandler.getReturnUnit(input),"string":convertHandler.getString(input)})
})}