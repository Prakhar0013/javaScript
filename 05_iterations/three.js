// for of

//They are array specific loops
// ["", "", ""]
// [{}, {}, {}]
//We may have to handle multiple strings in array or mu;ltiple objects from an array

const arr=[1, 2, 3, 4, 5]

for(const num of arr){
    //console.log(num);
}

const greetings= "Hello World!"
for(const greet of greetings){
    //console.log(`Each char is ${greet}`);   
}

//Maps

const map= new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('JP', "Japan")
map.set('Fr', "France")
map.set('IN', "India")
//console.log(map);

//Maps store unique values in same order as mentioned

// These are forof loop

for (const key of map) {
    console.log(key);
}
//Output:
/*
[ 'IN', 'India' ]
[ 'USA', 'United States Of America' ]
[ 'JP', 'Japan' ]
[ 'Fr', 'France' ]
*/
for (const [key,value] of map) {
    console.log(key, ':-', value);
}
//Now the array is being destructured to give separate key, value pair

const myObject={
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
// The object myObject can't be iterated normal;y

