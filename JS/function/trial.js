function singSong(){
    console.log("hi")
    console.log("herfi")
    console.log("hir")
}
singSong()

function greet(firstName, lastName){
    console.log(`hay there ${firstName} ${lastName[0]}.`)
}

function repeat(str ,numTimes){
    let result='';
    for(let i = 0;i<numTimes;i++){
     result += str;
     
    }
    console.log(result);
}

function isSnakeEyes(firstRoll, secondRoll){
    if(firstRoll===1&&secondRoll===1)
    console.log("snakeEyes")
    else
    console.log("not a snake eyes")
}
isSnakeEyes(1,1)

// HIGHER ORDER FUNCTION
// ***************************************

// function callTwice(func){
//     func()
//     func()
// }
// function tenTimes(f){
//     for(let i =0;i<=10;i++)
//     {
//         f()
//     }

// }
// function rollDie(){
//     const roll = Math.floor(Math.random()*6)+1
//     console.log(roll)
// }
// callTwice(rollDie)
// tenTimes(rollDie)

// RETURN VALUE IN FUNCTION
// ***************************************

// function mystryFunc(){
//     const rand = Math.random()
//     if(rand >= 0.5){
//         return  function(){
//             console.log("hay there yu r a gud function")
//             console.log("hay there yu r a kind person")
//         }

//     }else{
//         return function(){
//             alert("yu a bad")
//             alert("yu r infected by a virus")
//             alert("yu r infected by a virus")
//             alert("yu r infected by a virus")
//             alert("yu r infected by a virus")
//             alert("yu r infected by a virus")
//         }
//     }
// }
// mystryFunc()

// function inBetween(min ,max){
//     return function(num){
//         return num>=min&&num<=max;
//     }
// }

// DEFINING METHOD
// *********************************++**

// const myMath = {
//     PI:3.141,
//     square: function(num){
//         return num*num;
//     },
//     cube : function(num){
//         return num**3
//     }
// }

// USING OF THIS
// ***************************

// const myCat={
//     name : 'blue',
//     color : 'grey',
//     breed : 'german',
//     meow(){
//         console.log( this.color)
//         console.log( 'this is',this)
//     }
// }

// TRY & CATCH
// ********************

// try {
//   hello.toUpperCase;
// } catch {
//   console.log("yu got  an error !!!!!!!!!!!!!!");
// }
