/* Esercizio
Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
Tutte le risposte saranno in json. */

const express = require('express')
const router = express.Router()
//import controller
const postController = require('../controllers/postController.js')
const post = require('../data/db.js')

/* 
router.get('/', postController.index) */
router.get('/',(req,res)=>{
    res.json(post)
})
router.get('/:slug', postController.show)
router.post('/:slug', postController.store)

module.exports = router