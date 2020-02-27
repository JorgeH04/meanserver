const express = require('express');
const router = express.Router();

// Controllers
const player = require('../controllers/player.controller');


module.exports = app => {

  router.get('/', player.index);
  router.post('/', player.createPlayer);
  router.get('/:id', player.getPlayer);
  router.put('/:id', player.editPlayer);
  router.delete('/:id', player.deletePlayer);

  app.use(router);

};