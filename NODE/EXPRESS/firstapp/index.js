const express =  require("express")
const app = express()
// console.dir(app)

// app.use((req,res)=>{
//     console.log("we got a neew rqst")
//     // res.send('<h1> this is my header of the w/eb page<h1>')
//     // res.send({color:'red'})
//     // res.send("we got ur request its here")
//     // console.dir(req)
//     // console.dir(res)
// })


app.get('/', (req, res) => {
    res.send('im the home page yo yo yo yo!!')
})

app.get('/r/:subreddit/:postId', (req,res)=>{
    const { subreddit,postId } = req.params
// res.send(`<h1>Browsing the ${subreddit}</h1>`)
res.send(`<h1>viewing post id  ${postId} on the ${subreddit} he he he</h1>`)
})

app.post('/cats',(req,res)=>{
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!')

})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})
app.get('/search', (req, res) => {
    const { q } = req.query
    // console.log(res.querry)
    if(!q){
        res.send("nothing found opps!")
    }
    res.send(`<h1>search result for  ${q}</h1>`)

})

app.get('/*', (req, res) => {
    res.send('i dont know oops!')
})

app.listen(3000,()=>{
    console.log("listining on port 3000!!!")
})