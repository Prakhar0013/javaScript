// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//console.log("2">1); // as 2 is greater than 1
//console.log("02">1);
//console.log("1">1);
//console.log("01">1);
// Many times in such comparisons, the results may not be predictable
//Please make sure that the datatypes of both are same
// Typescript does not allow comparison of two different data types
//It just provides rules on operations

//console.log(null>=0);//
//console.log(null==0);//
//console.log(null>=0);
//Actually its not like null>=0 but there is an issue with value conversion

//Working of comparison operators >,< and equality operator == are different
//Whenever comparison operator is used, the null gets converted into number 0 so in those cases we get == value comparison as true

// console.log(Number(undefined));//Gives value NaN as result
// console.log(undefined>=0);//false
// console.log(undefined>0);//false

//Strict check, done using ===
//It checks the data type of the variables as well

console.log("2"==2);
