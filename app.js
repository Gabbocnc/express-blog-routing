const express = require('express')
const app = express()

const PostRouter = require('./routers/posts.js')


app.listen(3002, (req,res)=>{
    console.log(`server is running at http://localhost:3002`);
    
})


app.use('/', PostRouter)