
// // XML/XHRS

// const req = new XMLHttpRequest();

// req.onload = function(){
//     console.log("loaded")
//     // console.log(this.responseText)
//    const data =  JSON.parse(this.responseText)
//    console.log(data.name,data.height)

// }

// req.onerror = function () {
//     console.log("error")
//     console.log(this)

// }

// req.open("GET","https://swapi.dev/api/people/1/")
// req.send()


// "https://swapi.dev/api/people/1/"




// FETCH


// fetch("https:swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("RESOLVEd", res)
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })

//     .catch((e) => {
//         console.log("error ", e)
//     })




// fetch("https:swapi.dev/api/people/1/")
//     .then(res => {
//         console.log("RESOLVEd", res)
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//      return fetch("https:swapi.dev/api/people/2/")

//     })
//     .then(res=>{
//         console.log("second reqst")
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)

//     })

//     .catch((e) => {
//         console.log("error ", e)
//     })




// const loadStarwars = async () => {
//     try {
//         const res = await fetch("https:swapi.dev/api/people/1/")
//         const data = await res.json()
//         console.log(data)

//         const res2 = await fetch("https:swapi.dev/api/people/2/")
//         const data2 = await res2.json()
//         console.log(data2)

//     } catch (e) {
//         console.log(e)

//     }
// }
// loadStarwars()





// // AXIOS


// axios.get("https:swapi.dev/api/people/1/")

//     .then(res => {
//         console.log("response: ", res)
//     })
//     .catch((e) => {
//         console.log("error: ", e)
//     })

// const getStarwars = async (id) => {

//     try {

//         const res = await axios.get(`https:swapi.dev/api/people/${id}/`)
//         console.log(res.data)

//     } catch (e) {
//         console.log("ERROR", e)
//     }

// }

// getStarwars(10)
// getStarwars(16)


//  *********AXIOS WITH DOM MANIPULATION****************

const joke = document.querySelector('#jokes')
const button = document.querySelector('button')

const addJoke = async () => {
    const dadJoke = await getJoke()
    console.log(dadJoke)

    const newLI = document.createElement('li')
    newLI.append(dadJoke)
    joke.append(newLI)

}


const getJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        // console.log(res.data.joke)
        return res.data.joke

    } catch (e) {
        return "no jokes avl sorry"

    }
}
button.addEventListener('click', addJoke)


// *********TV MAZE API **************



