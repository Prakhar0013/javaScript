let score =undefined

//console.log(typeof(score));

let valueInNumber= Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);  

//null=>0, undefined=>NaN
//"33"=>33
//"33abc"=>NaN
//true=>1; false=>0;

let isLoggedIn= true;
let booleanIsLoggedIn= Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//null,undefined=>false
//""=>false
//"Prakhar"=>true
//0=>false; any integer other than 0=>true
let someNumber=undefined
let stringNumber= String(someNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber)

//*******************Operations*************

let value=2
let negValue= -value
//console.log(negValue);

// console.log(2+2); Sum
// console.log(2-2); Diff
// console.log(2*2); Product
// console.log(2/3); Division
// console.log(2**3); Exponent
// console.log(2%3);  Remainder

//Concatenation
let str1="Hello"
let str2=" Prakhar"

let str3= str1+str2
//console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

// console.log(3+(4*5)%3);//Avoid writing messy code like this as this isn't a good practice

//console.log(+true);//true return true while +true returns 1 
//console.log(true+); returns error SyntaxError: Unexpected token ')'
//console.log(+"");//returns 0

let num1,num2,num3;

num1=num2=num3=2+2

let gameCounter=100
++gameCounter;
//console.log(gameCounter);
let x = 3;
const y = x++;

// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


