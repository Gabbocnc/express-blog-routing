const post = require('../data/db.js')
const fs = require('fs')
/* 
function index(req, res) {
    const markup = `
        ${post.map(post => `
            <ul>
            <li>${post.title}</li>
            <li>${post.slug}</li>
            <li>${post.content}</li>
            <li><img src="${post.image}" alt="" style="width:400px;"></li>
            <li>${post.tags}</li>
            </ul>
             `
    ).join('')}
    `;
    res.send(markup)
    /*  res.json(markup) */




function show(req, res) {
    res.json(post)
}

function store(req, res) {
    const newPost = { 
        ...req.body
    };

    post.push(newPost);

    fs.writeFileSync('./data/db.js', `module.exports = ${JSON.stringify(post, null, 4)};`);

    res.json({
        Post: newPost
    });
}

module.exports = {
    /* index, */
    show,
    store
}