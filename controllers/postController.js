const post = require('../data/db.js')

function index(req,res){
    res.json({
        post: post
    })
}

module.exports = {
    index
}