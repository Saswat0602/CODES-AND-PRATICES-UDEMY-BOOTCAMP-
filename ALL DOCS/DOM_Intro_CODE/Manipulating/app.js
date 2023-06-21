// const allLinks = document.querySelectorAll('a');

// // for (let link of allLinks) {
// //     link.innerText = 'I AM A LINK!!!!'
// // }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

// const sqaure = document.getElementsByClassName('square')
// for (let img of sqaure){
//     img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

    // const link = document.querySelectorAll('p a')
    // for(let l of link){
    //     console.log(link.herf)
    // }

// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

// const h1 = document.querySelector('h1')



// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }
// ****************
// to know in details
// *****************


// const h1 = document.querySelector('h1')
// window.getComputedStyle(h1)
// window.getComputedStyle(h1).color
// window.getComputedStyle(h1).fontSize


// excercize/

// const div = document.querySelector('div [id = "container"]')
//  for (let d of div) {
//     div.style.textAlign = 'center'
    
//  }
//  const img = document.querySelector('img')

//  img.style.width= '150px'
//  img.style.borderRadius = '50%'


// Rainbow Text Exercise
// ************************************************************************************
// I've provided you with an <h1> element which contains 7 individual spans (each holding a single letter). 

// Please write some JavaScript to make them rainbow-colored! 

// In app.js you'll find an array of color names called colors.  It looks like: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].

// Your task is to select all spans, iterate over them, and assign them each one of the colors from the colors array.  The first span should be red, the second should be orange, etc.   Your result should look like this:


// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!


// const letters = document.querySelectorAll('span')

// let count = 0

// for (let letter of letters){
//     letter.style.color = colors[count]
//     count += 1


// h2.setAttribute('class',`${cur} border`)
// *************************************************************************************
// [
// In index.html, you'll find 6 <li> elements, two of which have the 'highlight' class applied to them. 

// Please use JavaScript and the classList property to invert which elements have the highlight class. 

// Basically iterate over all the <li> elements and toggle the class of 'highlight' on each one.   Your end result should look like this:
// ]

// let list = document.querySelectorAll('li');
// var listArray = [...list];

// /* Each <li> element is checked using the forEach() method. */
// listArray.forEach(element => {
//   /* Is the ".highlight" class style applied to the <li> element? */
//   if(element.classList.contains("highlight")) {
//     /* Remove the ".highlight" class style from the <li> element. */
//     element.classList.remove("highlight");
//   }
//   else {
//     /* Add the class style ".highlight" to the <li> element. */
//     element.classList.add("highlight");
//   }
// });
// *******************************************************




/* <h1>Creating Buttons</h1>


<div id="container">

</div> */



//create 100 buttons
//append them into the <div>
//create button element
//add some text to the button
//use appendChild to add button to div

// //create variable for <div>
// const div = document.querySelector('div');
// //loop 100 times


// for (let i = 0; i < 100; i++){
//   const button =  document.createElement('button');
//   button.innerHTML= "Hey!";
//   div.appendChild(button);
  
//   }
//It now works because document.createElement('button') only creates 1 button when it's outside the function. Inside it now correctly creates 100 buttons.


