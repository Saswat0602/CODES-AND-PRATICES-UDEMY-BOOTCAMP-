const express = require("express");
const app = express();
const morgan = require("morgan");
const AppError = require ('./AppError')

app.use(morgan("tiny"));

app.use((req, res, next) => {
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});





app.use("/dogs", (req, res, next) => {
  console.log("its a dog");
  next();
});

app.get("/error", (req, res) => {
  chicken.fly();
});


const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "saswat") next();
  // res.send("oops yu need password!!!");
  throw new AppError('Password required',401)
};

// app.use((req,res ,next)=>{
//     console.log("this is the 1st middel ware");
//     next()
// console.log("first middleware afterr you call");

// })

// app.use((req,res ,next)=>{
//     console.log("this is the second middel ware");
//     next()

// })

app.get("/", (req, res) => {
  console.log(`request date :${req.requestTime}`);
  res.send("HOme page");
});

app.get("/dogs", (req, res) => {
  console.log(`request date :${req.requestTime}`);
  res.send("woof page");
});
app.get("/secret", verifyPassword, (req, res) => {
  // console.log(`request date :${req.requestTime}`);
  res.send("My secrect sorry i cant tell yu");
});
app.get("/admin", (req, res) => {
  throw new AppError("YOu r not the admin", 403);
});


app.use((req, res) => {
  res.status(404).send("not found");
});

// app.use((err,req,res,next)=>{
 
//   console.log("**********************EEEERRROOOOOORRR****************");

// console.log(err);
// next(err)
// })
app.use((err,req,res,next)=>{
 
    const { status=500 } = err;
    const { message = 'something is wrong' } = err;
    res.status(status).send(message)
})




app.listen(3000, () => {
  console.log("app is listinng in port 3000");
});
  