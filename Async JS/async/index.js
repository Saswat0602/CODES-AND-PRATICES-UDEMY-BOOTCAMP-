


// async function hello(){

// }

// const sing = async()=>{
//     // throw new error('uh oh');
//     throw "oh no error"
//     return 'sa ka la ka'
// }

// sing().then((data)=>{
//     console.log("promise resolve with :" ,data)
// })
// .catch(err =>{
//     console.log("oh no promise rejected")
//     console.log(err)

// } )



// const login = async(username , password)=>{
//     if(!username || !password ) throw "missing credntials"
//     if(password === "saswat")return 'welcome back'
//     throw 'invalid login credntials'
// }

// login('saswat','saswat')
// .then(msg=>{
//     console.log("logg in ")
//     console.log(msg)
// })
// .catch(err=>{
//     console.log("errror")
//     console.log(err)

// })



// AWAIT 


const delay = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay);
    })
}


setTimeout(() => {
    
    
}, timeout);

// delay('red', 1000)
// .then(()=>delay('orange',1000))
// .then(()=>delay('yellow',1000))
// .then(()=>delay('green',1000))
// .then(()=>delay('blue',1000))
// .then(()=>delay('indigo',1000))
// .then(()=>delay('black',1000))
// .then(()=>delay('olive',1000))

async function rain() {
    await delay('red', 5000)
    await delay('yellow', 1000)
    await delay('olive', 1000)
    await delay('pink', 1000)
    await delay('black', 1000)
    await delay('blue', 1000)
    await delay('brown', 1000)
    return "all done"
}
// rain().then(()=>console.log("end of the show"))

async function printRain() {
    await rain()
    console.log("end of the color show")
}
printRain()







const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeReq() {

    try {
        let data1 = await fakeRequest('/page1')
        console.log(data1)
        let data2 = await fakeRequest('/page2')
        console.log(data2)

    } catch (e) {
        console.log(" caught an error")
        console.log(e)


    }



}