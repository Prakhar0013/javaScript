//There are two ways to declare a number
const score =400
//console.log(score)

const balance=new Number(100);
//console.log(balance);

//console.log(balance.toString().length);

//console.log(balance.toFixed(2));

const otherNumber=1123.8966

//console.log(otherNumber.toPrecision(3));
//rounds off the number to the number of digits told
//23.8966=23.9  precision=3
//123.8966=124  precision=3
//1123.8966=1.12e+3 precision=3

const hunderds= 1000000
//console.log(hunderds.toLocaleString('en-IN'));
//US States metric system by default

//We can also find maximum value of integers, minimum value of integers
//MAX_SAFE_INTEGER gives maximum safe value of the integers i.e. precision of the integers is not lost similar for MIN_SAFE_INTEGER

//++++++++++++++++++Maths++++++++++++++++++++

console.log(Math);
//console.log(Math.abs(-4));
//It converts -ve values to positive values
console.log(Math.round(4.5));
console.log(Math.floor(4.9));
console.log(Math.ceil(4.2));
console.log(Math.min(4,3,6,8));

console.log(Math.max(4,3,6,8));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random() *(max-min+1))+min);

