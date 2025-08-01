var c=300
if(true){
    let a=10
    const b=20
    var c=30
} 

// // console.log(a);
// // console.log(b);
// console.log(c);

//With var, scope is not considered at all so, if a programmer imports another program , there is a chance of variable overwriting which can lead to discrepancy
// same will happen without var as well
let a=300
if(true){
    let a=10
    const b=20
    //console.log("INNER: ",a);
} 

// console.log(a);
// console.log(b);
//console.log(a);

function one(){
    const username="prakhar"
    function two(){
        const website="youtube"
        //console.log(username);
        
    }
    //console.log(website);
    two()
}
//one()

//Here we come to know that child is able to access the parent variables which is called as closure

if(true){
    const username="Satya"
    if(username === "Satya"){
        const website=" trier.tech"
        //console.log(username+ website);
    }
    //console.log(website);
    
}
//console.log(username);

//++++++++++++++++++++interesting++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}

 
const addTwo = function(num){
    return num+2;
}
addTwo(5)
//This kind of function creation is called as function hoisting.If we try to call the function before initialization, we get an error
