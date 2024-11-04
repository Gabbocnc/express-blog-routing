const post = require('../data/db.js')

function index(req,res){
  const markup = `
  <div>${post.title}</div>
  `;
  /* res.send(markup) */
  res.json(markup)


}

module.exports = {
    index
}