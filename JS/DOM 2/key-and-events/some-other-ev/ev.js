// const input = document.querySelector('input')
// const h1= document.querySelector('h1')
// // input.addEventListener('change',function (e) {
// //     e.preventDefault
// //     console.log('saswat')  
// // })

// input.addEventListener('input',function (e) {
//     h1.innerText=input.value
//     // console.log('input event')  
// })


// const input = document.querySelector('input')
// const h12= document.querySelector('h1')
// // let welcome = welcome
// const inval= input.value




//  input.addEventListener('input',function (e) {
//     h12.innerText= "Welcome,"  + input.value   
// })



// <!-- event BUBBLING  -->
// <!-- ***const******************************************************************   -->

// const button = document.querySelector('#color')
// const cont = document.querySelector('#container')

// button.addEventListener('click', function (e) {
//     cont.style.backgroundColor = randColor()
//     e.stopPropagation()
// })
// cont.addEventListener('click', () => {
//     cont.classList.toggle('hide')
// })


// const randColor = () => {
//     const r = Math.floor(Math.random() * 255)
//     const g = Math.floor(Math.random() * 255)
//     const b = Math.floor(Math.random() * 255)
//     return `rgb(${r},${g},${b})`
// }


// EVENT DELEGATION
// *******************************************************************************************************



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
    newTweet.append(`--${tweet}`)
    tweetCont.append(newTweet)


    // console.log(newTweet)
}

tweetCont.addEventListener('click',(e)=>{
    e.target.nodeName = 'LI'&& e.target.remove()
   

})