var express = require('express');
var router = express.Router();
var LivroCont = require('../controllers/livros');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  LivroCont.livros_list()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

router.get('/genres', function(req, res, next) {
  LivroCont.genres_list()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

router.get('/characters', function(req, res, next) {
  LivroCont.characters_list()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

router.get('/', function(req, res, next) {
  if(req.query.personagem){
    LivroCont.booksByCharacter(req.query.personagem)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
  else{
    next();
  }
});

router.get('/', function(req, res, next) {
  if(req.query.genero){
    LivroCont.booksByGenre(req.query.genero)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro));
  }
  else{
    next();
  }
});

router.get('/:id', function(req, res, next) {
  LivroCont.lookUp(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

router.post('/', function(req, res, next) {
  LivroCont.insert(req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

router.delete('/:id', function(req, res, next) {
  LivroCont.delete(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

router.put('/:id', function(req, res, next) {
  LivroCont.update(req.params.id, req.body)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro));
});

module.exports = router;
