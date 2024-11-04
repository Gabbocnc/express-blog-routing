/* Esercizio
Usando l'array dei post fornito con le relative immagini, creare un file di routing (routers/posts.js) che conterrà le rotte necessario per l'entità post.
Tutte le risposte saranno in json. */

const express = require('express')
const router = express.Router()
//import controller
const postController = require('../controllers/postController.js')


router.get('/', (req,res)=>{
  res.json(postController.index).send
})

module.exports = router