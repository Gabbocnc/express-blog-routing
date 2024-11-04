const post = require('../data/db.js')
const fs = require('fs');
const { post } = require('../routers/posts.js');

function index(req, res) {
    const markup = `
        ${post.map(post => `
            <ul>
            <li>${post.title}</li>
            <li>${post.slug}</li>
            <li>${post.content}</li>
            <li>${post.image}</li>
            <li>${post.tags}</li>
            </ul>
             `
    ).join('')}
    `;
    res.send(markup)
    /*  res.json(markup) */
}

function show(req, res) {
    res.json(post)
}


function store(req, res) {
    const post = {
        id: post[post.length -1].id + 1,
        ...req.body
    }
    
    fs.writeFileSync('./data/db.js', `module.exports = ${JSON.stringify(post,null,4)} `)

    res.json({
        Post: post
    })
}


module.exports = {
    index,
    show,
    store
}