const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
app.use(cookieParser("thisismysecret"));

app.get('/greet',(req,res)=>{
    const {name='no-name'}=(req.cookies);
    res.send(`hay there ${name}`)
})

app.get('/setname',(req,res)=>{
    res.cookie('name','saswat ranjan')
    res.cookie('address','bbsr ')
    res.send('i snd yu a cookie')
})

app.get("/getsignedcookie",(req,res)=>{
    res.cookie('fruit','grape',{signed : true})
    res.send('signed in fruit cookies')
});

app.get('/verifyfruit', (req, res) => {
     console.log(req.cookies);
     console.log(req.signedCookies);
     res.send(req.signedCookies);
})




app.listen(3000, () => {
  console.log("SERVING!   ON PORT 3000");
});
 