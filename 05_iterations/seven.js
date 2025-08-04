const myNumbers= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums= myNumbers.map( (num) => num+ 10)

//Chaining
//It means that we are able to apply multiple methods on top of one another
const newNums= myNumbers.map((nums) => nums* 10)
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=> num>=40)

console.log(newNums);
