// const randColor = ()=>{
//     const r = Math.floor(Math.random()*255)
//     const g = Math.floor(Math.random()*255)
//     const b = Math.floor(Math.random()*255)
//     return `rgb(${r},${g},${b})`
// }

// const btns  = document.querySelectorAll('button')
// for (const bt of btns) {
//     bt.addEventListener('click',clr)
    
// }


// const h11= document.querySelectorAll('h1')
// for (const h of h11) {
//     h.addEventListener('click',clr)
    
// }
// function clr(){
//     this.style.backgroundColor=randColor()
//     this.style.color=randColor()
// }






// <!-- EVENT OBJECT  -->
// <!-- ********************************************************************* -->





// document.querySelector('button').addEventListener('click',function(e){
//     alert(e)
// })

// const inp = document.querySelector('input')
// inp.addEventListener('keydown',function(e){
//     console.log('keydown')
//     console.log(e.key)
//     console.log(e.code)
// })

// inp.addEventListener('keyup',function(){
//     console.log('keyup')})
// window.addEventListener('keydown', function(e){
//     // console.log(e.code)
//     switch(e.code){
//         case 'ArrowUp':
//         console.log('up')
//         case 'ArrowDown':
//         console.log('down')
//         case 'ArrowRight':
//         console.log('right')
//         case 'ArrowLeft':
//         console.log('left')
//         default:
//             console.log('ignored')

//     }


// })


// FORM EVENTS/PARENT DEFAULT 
// ******************************************************************//


// const form = document.querySelector('#shelter')
// const input = document.querySelector('#catName')
// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     console.log("submitted")
// })


// const form = document.querySelector('#shelter')
// const input = document.querySelector('#catName')
// const lists = document.querySelector('#list')
// form.addEventListener('submit',function(e){
//     e.preventDefault()
//     const catName = input.value
//     const newLI= document.createElement("LI")
//     newLI.innerText= catName
//     console.log(newLI)
//     // lists.append(newLI)
//     lists.append(newLI)
//     input.value=""
// })



// *************************OLD V****************************

const tweetForm = document.querySelector('#tweetForm')
const tweetCont= document.querySelector('#tweets')
tweetForm.addEventListener('submit',function(e){
    e.preventDefault()
    // const userNmae= document.querySelectorAll('input')[0]
    // const tweetinput= document.querySelectorAll('input')[1]
    const userNames = tweetForm.elements.username
    const tweets = tweetForm.elements.tweet
    addTweet(userNames.value,tweets.value)
    userNames.value=''
    tweets.value=''    
})
const addTweet = (username, tweet)=>{
    const newTweet = document.createElement('li')
    const bTag = document.createElement('b')
    bTag.append(username)
    newTweet.append(bTag)
    tweetCont.append(`--${tweet}`)
    tweetCont.append(newTweet)
    console.log(newTweet)
}

