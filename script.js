// Hey Kiddo
const ageOver18 = function (number) {
  console.log("Your age is", number);
  if (number >= 18) {
    return true
  } else
    return false
};

const checkAge = function (number) {
  const adultAge = ageOver18(number)
  if (number >= 18) {
    return "Hello there"
  } else
    return "Hey kiddo"
};
console.log(checkAge(16));

// VAT calculations Excercise 1

const calculateIncVAT = function (number) {
  console.log("Your price ex VAT is", number);
  const incLowVAT = (number * 1.09);
  console.log("Your price including low VAT is", incLowVAT.toFixed(2));
  const incHighVAT = (number * 1.21);
  console.log("Your price including high VAT is", incHighVAT.toFixed(2));
}
calculateIncVAT(1000);

const calculateExVAT = function (number) {
  console.log("Your price including VAT is", number);
  const totalExLowVAT = (number / 1.09);
  console.log("Your price ex low VAT is", totalExLowVAT.toFixed(2));
  const exLowVAT = (number - totalExLowVAT);
  console.log("Your VAT amount is", exLowVAT.toFixed(2));
  const totalExHighVAT = (number / 1.21);
  console.log("Your price ex high VAT is", totalExHighVAT.toFixed(2));
  const exHighVAT = (number - totalExHighVAT);
  console.log("Your VAT amount is", exHighVAT.toFixed(2));

}
calculateExVAT(1210);

















