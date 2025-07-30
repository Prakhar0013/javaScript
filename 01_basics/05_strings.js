const name="Prakhar"
const repoCount=5

//console.log(name + repoCount+" Value");//This way of writing string isn't recommended at all
//console.log(typeof(name));

//console.log(`Hello, my name is ${name.toUpperCase()}, and my repo count is ${repoCount}`);//advantage of using backticks is string interpolation(we can create placeholders, directly inject our variables into them)
//This format is more readable and reliable
//This modern way is called string interpolation
//we can use functions on the variables as well like toUpperCase

// There is another way to declare a string as well

const gameName=new String('Prakhar Agrawal')
//console.log(gameName);
/*
String {'Prakhar Agrawal'}0: "P"1: "r"2: "a"3: "k"4: "h"5: "a"6: "r"7: " "8: "A"9: "g"10: "r"11: "a"12: "w"13: "a"14: "l"length: 15[[Prototype]]: String[[PrimitiveValue]]: "Prakhar Agrawal"*/


//console.log(gameName[0]);
//console.log(gameName.__proto__);
//the object we get from it isn't empty

//console.log(gameName.length);
// Returns length of string

//console.log(gameName.toUpperCase());
//for accessing functions mentioned within proto, we don't need to mention __proto__ everytime

//This function didn't change our original string, it just displays in upper case

//console.log(gameName.charAt(2));
//Another way to access character at specified index position in string

//console.log(gameName.indexOf('a'));
//This returns index of first occurence of the character in the string

const newString= gameName.substring(0,4); //0 is the starting index, 4 is the length of the substring
//console.log(newString);
//substring can't handle -ve values. 

const anotherString= gameName.slice(-15,4);
//console.log(anotherString);
//can take substring between start and end indexes 

const newStringOne="    Prakhar "
console.log(newStringOne);
console.log(newStringOne.trim());
//trim works on white space as well as line terminators

const url="https://google.com/prakhar%20agrawal"

console.log(url.replace('%20','-'))

console.log(url.includes('khar'));

console.log(gameName.split(' '));
