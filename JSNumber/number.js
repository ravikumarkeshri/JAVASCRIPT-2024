//Converting number to string.
 const age = 30;
 const ageStr = age.toString();

//Displaying a Price
const price =19.99;

//const displayPrice =" The Price is $ " +price.toString();
const displayPrice = `The price is ${price}`
// console.log(displayPrice)

//Using toString with different Bases

const decimalNum = 10;
const binaryStr = decimalNum.toString(2)
const hexStr = decimalNum.toString(16);
// console.log(binaryStr)
// console.log(hexStr)

// Working with BigInt

const bigIntNum = BigInt('0239402392039')
// console.log(bigIntNum.toString())

//Formating currency
const productPrice = 49.955
const formattedPrice  = productPrice.toFixed(2);
// console.log(formattedPrice);

//Scientific Data 
const Pivalue = 3.1415
const roundedPi = Pivalue.toFixed(3)
// console.log(roundedPi);

//Scientific Data Representation
const avagadroNumber = 6.02214076e23
const scientificNotation = avagadroNumber.toExponential();
// console.log(scientificNotation)

const num =10;
const expoNotation = num ** 2 //10*10
// console.log(expoNotation)

//Converting User Input to Integer
const userInput = '42'
const userAge = parseInt(userInput,10)
// console.log(userAge)

//Extracting Price from a Text
const priceText = "Price: 100 USD"
const extractedPrice = parseInt(priceText.replace("Price:","").replace("USD",""),10)
// console.log(extractedPrice , typeof(extractedPrice));

//Converting Binary Data from a sensor 
const sensorData = "1101"
const sensorDataDecimal = parseInt(sensorData,2)
// console.log(sensorDataDecimal)

//Converting Price for an E-commerce Checkout

const Checkoutprice = "$99.99"
const CheckoutpriceFloat = parseFloat(Checkoutprice.replace("$",""));
// console.log(CheckoutpriceFloat);
