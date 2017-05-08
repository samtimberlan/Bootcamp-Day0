'use script'
function checkPrime(numberPassed){

	//returns false for 1
	if(numberPassed < 2){
		return false;
	}

	//returns true for 2 and 3
	else if(numberPassed <= 3){
		return true;
	}

	//returns false for even numbers greater than 2
	else if(numberPassed % 2 === 0){
		return false;
	}

	let length = Math.sqrt(numberPassed) + 1;
	for(let counter = 3; counter <= length; counter += 2){
		if(numberPassed % counter === 0){
			return false;
		}
	}
	return true;
}
checkPrime(100)
function getPrimes(numberPassed){
	listOfPrimes = [];
	//Check if number passed is an integer
	if(Number.isInteger(numberPassed) === false){
		return "Invalid input";
	}

	//If no prime number is attainable, return an empty array
	else if(numberPassed <= 2){
		return listOfPrimes;
	}
	else{
	for(let counter = 0; counter <= numberPassed; counter++){
		if(checkPrime(counter) === true){
			listOfPrimes.push(counter);
		}
	}
  }
  return (listOfPrimes)
}
getPrimes(30);
module.exports = {getPrimes};
