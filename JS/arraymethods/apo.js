// const add =(x,y) =>{
//     return x+y
// } 
// const square =(x) =>{
//     return x**2;
// }
//  const multiply =(x,y) =>{
//     return x*y
// } 

// const rollDies = ()=>{
//     return Math.floor(Math.random()*6)+1
// }

// const greet = (name) => {
//     return `Hey ${name}!`;
//   };
  
//   console.log(greet("Hagrid")); //"Hey Hagrid!"
//   console.log(greet("Luna")); //"Hey Luna!"



// const rollDie = ()=>(
//          Math.floor(Math.random()*6)+1
// )


// setTimeout

// console.log("hello there ")
// setTimeout(() => {
//     console.log("hello yu still here ")

// }, 3000);
// console.log("GET out ")

// setInterval(() => {
//     console.log(Math.random())

// }, 2000);


// function validUserNames(anArrayOfUserNames) {

//     return anArrayOfUserNames.filter(userName => userName.length < 10);
    
//     }
    
//     // And call it like this...
//     validUserNames(['mark', 'staceysmom1978', 'q1234567890223', 'carrie98', 'MoanaFan']);

// FILTER

// const nums =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,]
// const odd = nums.filter(n=>{
//     return n%2===1;
// })
// const smallnums=nums.filter(n=>n<5)

// movies = [
//     {
//         title : 'alien',
//         score : 90,
//         year : 2003
//     } ,
//      {
//         title : 'Avtar',
//         score : 98,
//         year : 2009
//     },
//       {
//         title : 'Avenger',
//         score : 85,
//         year : 2012
//     } , 
//     {
//         title : 'panther',
//         score : 80,
//         year : 1986
//     }, {
//         title : 'mad-max',
//         score : 75,
//         year : 1996
//     }
// ]
// const goodMOvies = movies.filter(movie =>{
//     return movie.score>80
// })
// const goodTitles= goodMOvies.map(m=>m.title)

// // movies.filter(m=> m.score>80).map(m=>m.title) ******
// const badMovies= movies.map(m=>m.score<80)
// const recentMovies= movies.map(m=>m.year> 2000)



// //SUM AND EVERY 


// const words = ["dog","dig","bag","wag","sag"]
// words.every(word=>{
//     return word.length===3
// })//true

// words.every(word=>word[0]==='d')  // false

// words.every(w=>{
//     let lastLetter =w[w.length-1]
//     return lastLetter ==='g'
// })   //  true


// const wor = ["dogs","dig","bag","wag","sag"]
// wor.some(word=>{
//     return word.length===3
// })//true

// wor.every(word=>word[0]==='x')  // false

// wor.some(w=>w.includes('ig'))    // ture

// movies.some(movie=>movie.year>2015)





// function allEvens(arr) {
//     return arr.every(val => val % 2 === 0)
//     }
    
//     allEvens([2,4,6,8]) //true
//     allEvens([1,4,6,8]) //false
//     allEvens([1,2,3]) //false

// REDUCE METHOD 
// ********

// [3,5,7,8,9,11].reduce((acc,curr)=>{
//     return acc + curr;
// });

// const prices = [9.88,6.45,5.93,3.56];

// const total = prices.reduce(total,price)=>{
//     return total +price
// }


// const evens = [2,4,6,8]
// evens.reduce((sum, num)=> sum+num ,100)
// const total = prices.reduce((total,price)=>{
//     if (price<min) {
//         return price;
//     }
//     return min;
// })



// moviesd = [
//     {
//         title : 'alien',
//         score : 90,
//         year : 2003
//     } ,
//      {
//         title : 'Avtar',
//         score : 98,
//         year : 2009
//     },
//       {
//         title : 'Avenger',
//         score : 85,
//         year : 2012
//     } , 
//     {
//         title : 'panther',
//         score : 80,
//         year : 1986
//     }, {
//         title : 'mad-max',
//         score : 75,
//         year : 1996
//     }
// ]
// const highestRated = moviesd.reduce((best, curr)=>{
//     if (curr.score >  best.score) {
//         return curr;
        
//     }
//     return best
// })






///THIS =>

// const person ={
//     firstName : 'saswat',
//     lastNmae  : 'ranjan',
//     fullName  : function(){
//         return `${this.firstName}  ${this.lastNmae}`
//     },
//     shoutNmae : function (){
//         setTimeout(() => {
//             console.log(this)
//             console.log(this.fullName())
//         }, 3000);
//     }
// }
