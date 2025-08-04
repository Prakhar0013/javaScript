// Iterating through the objects
const myObject ={
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}
//forin loop
//Accessing the keys
for (const key in myObject) {
    //console.log(key);
}
//Accessing the values
for (const key in myObject) {
    //console.log(myObject[key]);
}

for(const key in myObject){
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

//Can for in be used in arrays as well?

const prog=['js','java','go','cpp','py']
for (const key in prog) {
    //console.log(key);
}
//This returns index positions of the elements in array
for (const key in prog) {
    //console.log(prog[key]);
}

//we can't iterate through maps
const map= new Map()
map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('JP', "Japan")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}
//There is no output for this

