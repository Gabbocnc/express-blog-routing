const express = require('express')
const app = express()
app.use(express.static('public'));
const PostRouter = require('./routers/posts.js')

app.use(express.json())



app.listen(3002, (req,res)=>{
    console.log(`server is running at http://localhost:3002`);
    
})


app.use('/', PostRouter)