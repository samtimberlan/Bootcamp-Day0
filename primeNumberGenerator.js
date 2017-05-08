'use script'
function checkPrime(n){
	if(n < 2){
		return false;
	}
	else if(n <= 3){
		return true;
	}
	else if(n % 2 === 0){
		return false;
	}

	let length = Math.sqrt(n) + 1;
	for(var i = 3; i <= length; i += 2){
		if(n % i === 0){
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
	for(let i = 0; i <= numberPassed; i++){
		if(checkPrime(i) === true){
			listOfPrimes.push(i);
		}
	}
  }
  return (listOfPrimes)
}
getPrimes(30);
module.exports = {getPrimes};
