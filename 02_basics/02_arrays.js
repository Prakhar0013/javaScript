const marvel_heroes=["Thor","Ironman","Spiderman"]
const dc_heroes=["Superman","Flash","Batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// This push whole array, dc_heroes into array, marvel_heroes
//console.log(marvel_heroes[3][1]);

// const allHeroes=marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);
// concat creates a new array containing values of both the arrays combined
//Output: [ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'Batman' ]

//Spread operation
const all_new_heroes=[...marvel_heroes,...dc_heroes]
console.log(all_new_heroes);
//This one is more preferable over concat operation as it can be used for n number of arrays

const another_array=[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usable_another_array= another_array.flat(Infinity)
console.log(usable_another_array);
//Actually in place of infinity we have to mention the depth of arrays which we want to flat out

 console.log(Array.isArray("Prakhar"));
 //.isArray() is a boolean function, checks if the given data is in array
  console.log(Array.from("Prakhar"));
  //.from() creates an array from the string
 console.log(Array.from({name: "Prakhar"}));  //interesting
 //Here the result is an empty array as it doesn't know whether to make an array of keys or values

 let score1=100
 let score2= 200
 let score3=300
console.log(Array.of(score1, score2, score3));
//returns a new array from a set of elements
