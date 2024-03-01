// // const numbers2 =[1,2,3,4]

// // result =numbers2.map((number)=>{
// // return {
// //     number: numbers2,
// //     name: "A"
// // }

// // })
// // console.log(result)

// // const numbers3=[1,2,3,4,5,6,7,8,9,10]

// // // numbers3.filter((value)=> value%2===0).forEach((value)=>console.log(`${value} `)) 

// // result= numbers3.filter(function(number){
// //     return number % 2 != 0
// // })
// // console.log(result)

const books = [
    {
        title : "Mahabir pun",
        author : "Mahabir pun",
        year : 2023
    },
    {
        title : "Think like a monnk",
        author : "Jay Shetty",
        year : 2020
    },
    {
        title : "Book3",
        author : "Author3",
        year : 2021
    },
    {
        title : "Book4",
        author : "Author4",
        year : 2000
    },
    {
        title : "book5",
        author : "Mahabir pun",
        year : 1990
    },
    {
        title : "Book6",
        author : "Jay Shetty",
        year : 1999
    },
    {
        title : "Book7",
        author : "Author3",
        year : 2001
    },
    {
        title : "Book8",
        author : "Author4",
        year : 2002
    }
]
// const output = books.filter(function(book){
//     return  book.year > 2000;
// })
// console.log(output);

// const output =books.filter(function(book){
//     return  book.author === 'Mahabir pun' 
// })
// console.log(output)

//reduce ==> it is used to reduce the array into single value or a single object.

const numbers  = [1,2,3,4,5,6,7,8,9,10]
sum= numbers.reduce(function(accumulator,current){
    return accumulator+current
},0)
console.log(sum) //it will give us the sum of all elements

const cartItem =[
    {
        name: "rex",
        quantity: 2,
        price: 300
    },
    {
        name: "rexw",
        quantity: 2,
        price: 300
    },
    {
        name: "rexw",
        quantity: 2,
        price: 300
    }
]

const output =cartItem.reduce(function(accumulator,currentProduct){
    accumulator.totalPrice= accumulator.totalPrice + (currentProduct.quantity * currentProduct.price)
    return accumulator
},{totalPrice:0, totalQuantity:0})
console.log(output)

const people =[
    {
        name :"reeko", age:32
    },
    {
        name :"rekto", age:32
    },
    {
        name :"rekyo", age:22
    },
    {
        name :"reko", age:22
    }
]
 const groupData=people.reduce(function(accumulator,person){
    const age = person.age
    if(!accumulator[age]){
       accumulator[age]=[]  
    }
     accumulator[age].push(person)
      return accumulator;

 },{})
 console.log(groupData);