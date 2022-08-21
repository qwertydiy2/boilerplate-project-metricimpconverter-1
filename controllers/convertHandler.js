function ConvertHandler() {
  
  this.getNum = function(input) {
    let result = input.split(/[a-zA-Z]+|^[A-Za-z]+/g)
    
    return Number(result[0]);
  };
  
  this.getUnit = function(input) {
    let result=input.split(/[a-zA-Z]+|^[A-Za-z]+/g)
    
    return result[1];
  };
  
  this.getReturnUnit = function(input) {
    let result = input.split(/[a-zA-Z]+|[0-9]+/g)[1].toLowercase()
		if(result == 'gal'){
			return 'L'
		}else if(result == 'l'){
			return 'gal'
    }else if(result == 'lbs'){
			return 'Kg'
		}else if(result == 'kg'){
			return 'lbs'
    }else if(result == 'mi'){
			return 'Km'
		}else if(result == 'km'){
			return 'gal'
		}
  this.spellOutUnit = function(result) {
	 //let result = input.split(/[a-zA-Z]+|^[a-zA-Z]+/g)[1].toLowercase()
		if(result == 'gal'){
			return 'gallons'
		}else if(result == 'l'){
			return 'litres'
    }else if(result == 'lbs'){
			return 'pounds'
		}else if(result == 'kg'){
			return 'kilograms'
    }else if(result == 'mi'){
			return 'miles'
		}else if(result == 'km'){
			return 'kilometers'
		}
	};
  
  this.convert = function(input) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
		let number = Number(input.split(/[a-zA-Z]+^[A-Za-z]+/) [0].toLowercase())
		let result = input.split(/[a-zA-Z]+|[0-9]+/g)[1].toLowercase()
		if(result == 'gal'){
			return number*galToL 
		}else if(result == 'l'){  
			return number/galToL
		}else if(result == 'lbs'){
			return lbsToKg*number
		}else if(result == 'kg'){
			return number/lbsToKg
    }else if(result == 'mi'){
		  return miToKm*number
		}else if(result == 'km'){
			return number/miToKm
		}
  };
  
  this.getString = function(input) {
		let number = Number(input.split(/[a-zA-Z]+^[A-Za-z]+/) [0].toLowercase())
    let result = input.split(/[a-zA-Z]+|[0-9]+/g)[1].toLowercase()
    return this.getNum(input)+' '+this. spellOutUnit(this.getUnit(input))+' converts to '+this.convert(input)+' '+this.spellOutUnit(this.getReturnUnit(input))


  };
  
}
		}
module.exports = ConvertHandler;
