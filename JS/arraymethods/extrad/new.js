// function rollDie(numSides){
//     if (numSides==undefined) {
//         numSides=6;
//     }
//     return Math.floor (Math.random()*numSides)+1
// }

// function rollDie(numSides=6){
//     return Math.floor (Math.random()*numSides)+1
// }

// function greet(msg , name){
//     console.log(`${msg}, ${name}`)
// }
// function greet(name,msg= 'hay there'){
//     console.log(`${msg}, ${name}`)
// }

// ***********

// spread  in function

// const nums= [13,45,6,3,2,34,5,87,90,123456,44,435,2342356,]

// Math.max(...nums)
// Math.min(...nums)
// // *********

// // spread  in array
// const cats = ['blue','scarry','hyu']
// const dogs = ['blilue','hacarry','hnewyu']

// const allPets =[...cats,...dogs]
// // ***************

// // spread  in object

// const fast={members :  4,family: 'michel '}
// const fury={doms : hello   ,family: 'harry'}

// const data={
//     userName : 'max',
//     mail     : 'aaksd878@gmail.com',
//     password : '123456'
// }
// const newUser ={...data,id:4562,isAdmin: false    }

// ******************

// rest 


// function sum(){                           ** not working
//     console.log(arguments)
//     return  arguments.reduce((total,el)=> total +el)
// }

// function sum(...nums){
//     console.log(nums)
//      return  nums.reduce((total,el)=> total +el)
// }

// function race(gold,silver,...other){
//     console.log(`gold goes to:${gold}`)
//     console.log(`silver goes to:${gold}`)
//     console.log(`and thnx for participating:${other}`)
// }



// ************


// ****************************************************** 
//  **OLD WAY **
function multiply(a,b){
    b= typeof b!== 'undefined' ? b:1;
    return a*b;
}
multiply (4)
multiply (4,45)

// **NEW WAY**?
 function multiply(a,b=1){
    return a*b;
 }
multiply (2,4)
multiply (4)
// ************************************************************************


const fl ={legs: 4, family :'fld'} 
const cl ={furry: 'true', family :'fld'} 

const dog = {...cl,isPet: true}
const lion = {...fl,genus: 'panthera'}
const catDog = {...cl,...fl}



function sumAll()
{
    let total = 0;
    for (let i= 0 ;i<arguments.length;i++){
        total += arguments[i];
    }
    return total;
}
sumAll(4,65,5)
sumAll(4,65,55,64,65,354)





const scores =[32453454,534564,4656977,354,53,54]

const hs = scores[0]
const shs = scores[1]

const [gold,silver,bronze]=scores;


// DESTRUCTURING ARRAY

// const raceresult =['saswat'  , 'sam', 'sudipta']

const  raceresult =[gold,silver,bronze];
gold;
silver;
bronze;
const [fastest ,...everyoneelse]=raceresult


