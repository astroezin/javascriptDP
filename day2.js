//const numbers =[1,2,3,4,5]
//slice-----> used to create a copy of a portion of the array. it doesnt  modify the original
//array
//slice(startIndex, endIndex) --> this will return an array from start index till end index -1
//const newSlicedArray=numbers.slice(1,4)
//console.log(newSlicedArray); // [1,2,3,4,5]

//splice-----> is used to change the content of an array by removing or replacing existing and/or 
//adding new elements

// splice(startIndex, deleteCount, item)

// let splicedNumbers = numbers.splice(1,2,3,34,5, 6)
// console.log(splicedNumbers)
//split


// const person={
//     name: "rejin lama",
//     address: "nepal"
// }
// Object.freeze(person)
// person.name="rejin"
// console.log(person)
// console.log(Object.keys(person)); // returns an array with all keys in object
// console.log(Object.values(person)); //returns an array with all values in object//

//CONDITIONAL In Javascript
const isRaining=true;
// if (isRaining){
//     console.log("Bring umbrella");
// }else{
//     console.log("No need for umbrella")

// }



// ternary operator

// const result= isRaining? "Bring umbrella":"No need for umbrella";
//short circuit evaluation
// const result = isRaining &&"carry umbrella" || "dont carry umbrella"
// console.log(result);


// let isLoggedIn =true
// const name =isLoggedIn && "Authenticated"
// console.log(name)

//LOOPING IN JAVASCRIPT
// for(let i=0 ;i<5 ; i++){
//    console.log(`Looping ${i}`);
// }

// while loop




// const temperature=30
// if (temperature>30){
// console.log(`It's hot outside`)
// } else if(temperature>20 && temperature<=30){
//     console.log('It\'s cold outside')
// }else {
//     console.log('It\s a nice day')
// }

//Nullish Coelescing Operator
// let age=null
// let result =age ?? "No age"
// console.log(result)


