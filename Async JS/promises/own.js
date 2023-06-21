const fakeRequest = (url)=>{
    return new Promise ((resolve , reject)=>{
        const rand  = Math.random()
        setTimeout(()=>{
            if (rand <0.7){
                resolve('your fake request is here')
            }
            reject('request rejected')
        },1000)
    })
}

fakeRequest('/mine/12')
.then((data)=>{
    console.log("done with the request")
    console.log('data is ',data)
})
.catch((err)=>{
    console.log("oh shit " , err)
})



const delay = (color, delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay);
    })
}


delay('red', 1000)
.then(()=>delay('orange',1000))
.then(()=>delay('yellow',1000))
.then(()=>delay('green',1000))
.then(()=>delay('blue',1000))
.then(()=>delay('indigo',1000))
.then(()=>delay('black',1000))
.then(()=>delay('olive',1000))