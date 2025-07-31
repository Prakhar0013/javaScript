//array
//In JS, arrays are resizable, can contain a mix of different data types
//In js, the copies of arrays are shallow copies(shared using same reference points)
// Just like strings, in order to create a new array object with new keyword 
const myArr=[0, 1, 2, 3, 4, 5]

const myArr2= new Array(1,2,3,4)
//console.log(myArr[1]);

// Array methods

//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(9)

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(8));
//Result of non existing element with includes() is false, while fot that of index of an non existing element is -1

const newArr= myArr.join()
//convert the array to string
//console.log(newArr)
//console.log(myArr);

//slice, splice

console.log("A ",myArr);

const myn1=myArr.slice(1,3)
//Here, we get elements in middle of elements not the starting, ending elements
console.log(myn1);

console.log("B ", myArr);
const myn2= myArr.splice(1,3)
console.log(myn2);
console.log("C ",myArr);


