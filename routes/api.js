'use strict'

const expect = require('chai').expect
const ConvertHandler = require('../controllers/convertHandler.js')

module.exports = function (app) {
  const convertHandler = new ConvertHandler()
  app.get('/api/convert', function (req, res) {
    const input = req.query.input
    console.log(
      '🚀 ~ file: api.js ~ line 13 ~ convertHandler.convert',
      convertHandler.convert
    )
    /* try {
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
				res.send('invalid unit')
			} catch(error) {
				res.send('invalid number and unit')
			}
		} try {
			var y = convertHandler.getNum(input)
		} catch {
				res.send('invalid number')
		}
	}
	} */
    if (convertHandler.getNum(input) == 'Invalid conversion') {
      if (
        convertHandler.getUnit(input) == 'No conversion unit' ||
        convertHandler.getUnit(input) == 'Invalid conversion unit'
      ) {
        res.send('Invalid number and unit')
      } else {
        res.send('Invalid number')
      }
    } else {
      if (
        convertHandler.getUnit(input) == 'No conversion unit' ||
        convertHandler.getUnit(input) == 'Invalid conversion unit'
      ) {
        res.send('Invalid unit')
      } else {
        res.json({
          initNum: convertHandler.getNum(input),
          initUnit: convertHandler.getUnit(input),
          returnNum: convertHandler.convert(input),
          returnUnit: convertHandler.getReturnUnit(input),
          string: convertHandler.getString(input)
        })
      }
    }
  })
}
