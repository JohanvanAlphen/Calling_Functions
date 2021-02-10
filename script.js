// // Function declaration

function multiply1(number1, number2) {
  sum1 = Math.pow(number1, 2);
  sum2 = Math.pow(number2, 2);
  total1 = (sum1 + sum2);
  total2 = total1 * total1;
  console.log(total2);

  //console.log(((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2)));
}

multiply1(2, 3);


// // Function expression

const multiply2 = function (number1, number2) {
  sum1 = Math.pow(number1, 2);
  sum2 = Math.pow(number2, 2);
  total1 = (sum1 + sum2);
  total2 = total1 * total1;
  console.log(total2);

  //console.log(((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2)));
};

multiply2(3, 4);

// Arrow function
const multiply3 = (number1, number2) => {
  sum1 = Math.pow(number1, 2);
  sum2 = Math.pow(number2, 2);
  total1 = (sum1 + sum2);
  total2 = total1 * total1;
  console.log(total2);
}
//const multiply3 = (number1, number2) => console.log(((number1 * number1) + (number2 * number2)) * ((number1 * number1) + (number2 * number2)));;

multiply3(7, 8);