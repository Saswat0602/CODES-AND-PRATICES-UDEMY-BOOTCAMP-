const mongoose = require ('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/movieApp")
.then (()=>{
    console.log("connection successful");
})
.catch(err=>{
    console.log(err);
})



const movieSchema =  new mongoose.Schema({
    title : String,
    year: Number,
    score:Number,
    rating:String
})

const m = mongoose.model('Movie', movieSchema);
// const titanic = new Movie({title:'titanic',year:1999,score:9.2,rating:'R'})

// const blah = new Movie()
// blah.save()

// Movie.insertMany([
//     {title:'fastx',year:2023,score:7.2,rating:'R'},
//     {title:'avenger',year:2012,score:9.5,rating:'pg-13'},
//     {title:'thor',year:2017,score:8.2,rating:'pg-13'},
//     {title:'avtar',year:2009,score:8.5,rating:'R'},
//     {title:'demon slayer',year:2021,score:9.2,rating:'R'},
//     {title:'spider-man',year:2018,score:9.5,rating:'pg-13'},
// ])
// .then(data=>{
//     console.log("it worked");
//     console.log(data);
// })


















// const mongoose = require("mongoose");

// main().catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/test");
//   console.log("its open");

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }