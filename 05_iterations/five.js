const coding = ["js", "ruby", "java", "python", "cpp"]

//foreach
//In for each loop we are creating a callback. A callback doesn't have a name
//As a parameter, we take val(can take anything), for iterating through values in coding
// coding.forEach( function (val) {
//     console.log(val);
// })

//As a callback, we can use arrpw functions as well
// coding.forEach( (item) => {console.log(item);
// } )

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)
//Note: Here, we giving reference of the function printMe, we are not executing it

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding=[
    {
        languageName:"javascript",
        languageFileName: "js"
    },
    {
        languageName:"java",
        languageFileName: "java"
    },
    {
        languageName:"python",
        languageFileName: "py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);  
})