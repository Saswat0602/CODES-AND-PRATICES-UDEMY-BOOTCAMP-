const bt =  document.querySelector('#btn')

bt.onclick= function(){
    console.log("you slpaed me")
    console.log("you slpaed me twice")
  
}
function again(){
    console.log("helllo")
    console.log("helllo the re yu bledddy useless")
}
bt.onmouseenter = again
 
document.querySelector('h1').onclick  =()=>{
    alert("you killed me")
}

const btn3=document.querySelector('#v3')
btn3.addEventListener('click',function(){
        alert('click')
})

function test(){
    console.log('helloo im the test')
}


function nest(){
    console.log('helloo im the nested looop and what are yu')
}

const btn4  = document.querySelector('#v4')

// btn4.onclick = test
// btn4.onclick = nest

btn4.addEventListener('click',test)
btn4.addEventListener('click',nest)









// setInterval(() => {
//     console.log("who the ")
    
// }, 1000);