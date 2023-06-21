// setTimeout(() => {
//     document.body.style.backgroundColor = 'red'
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'yellow'
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'green'
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'black'
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'violet'
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'blue'
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


const delyed = (newColor, dealy, doNext) => {
    setTimeout(() => {

        document.body.style.backgroundColor = newColor
        doNext && doNext();

    }, dealy);
}

delyed('red', 1000, () => { 
    delyed('red', 1000, () => {
        delyed('orange', 1000, () => {
            delyed('yellow', 1000, () => {
                delyed('green', 1000, () => {
                    delyed('blue', 1000, () => {
                    })
                })
            })
        })
    })
})



searchMovie('aaa', () => {
    saveToDb(movies, () => {
        // if it works run this line of code
    }, () => {
        // if it does not work run this line of code  
    })
},()=>{
    // if api is down  run this line 
})










