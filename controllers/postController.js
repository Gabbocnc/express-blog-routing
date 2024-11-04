const post = require('../data/db.js')

function index(req,res){
    const markup = `
        ${post.map(post=> `
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

function show (req,res){
    res.json(post)
}

module.exports = {
    index,
    show
}