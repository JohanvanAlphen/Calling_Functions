// Checking if number > 100

const checkNumber = function (number1, number2) {
  const sum = number1 * number2
  if (sum < 100) {
    return true
  }
  return false
};

const result1 = checkNumber(21, 5);
const result2 = checkNumber(3, 4);
console.log("Your result is", result1);
console.log("Your result is", result2)

// Above mentioned function does something, the result is true or false (boolean)

// Bouncer at a club

const allowedInClub = function (maxNumberPeople, currentNumberPeople, minAgePerson) {

  if ((currentNumberPeople < maxNumberPeople) && (minAgePerson => 21)) {
    return "come in"
  }; if (currentNumberPeople > maxNumberPeople) {
    return "it's too busy now, come back later"
  }; if (minAgePerson < 21)
    return "this is a club for adults"
};

const person1 = allowedInClub(1900, 1500, 24);
const person2 = allowedInClub(1900, 2000, 24);
const person3 = allowedInClub("", "", 18);
console.log("Answer person 1", person1);
console.log("Answer person 2", person2);
console.log("Answer person 3", person3);

// Calculate the average

const calculateAverage = function (num1, num2, num3, num4, num5) {
  const sum = Math.round((num1 + num2 + num3 + num4 + num5) / calculateAverage.length);
  return sum;
};

const result = calculateAverage(6, 8, 12, 4, 5);
console.log("The (rounded) average is", result)



// const array = [5, 8, 9, 3, 6]
// const sum = array.reduce((previous, current) => current += previous);
// const calculateAverage = Math.round(sum / array.length);
// console.log("The (rounded) average is", calculateAverage)


