const express = require('express');
const router = express.Router();
const Player = require('../models/player');

// Controllers
//const player = require('../controllers/player.controller');



  router.get('/', async (req, res) => {
    const players = await Player.find();
    res.json(players);
  });


  router.post('/',async (req, res) => {
    const playy = new Player(req.body);
    await playy.save();
    console.log(playy);
    //console.log(req.body);
    res.json({'status': 'emp saved'});
  });
  
  
  router.get('/:_id', async (req, res) => {
    const playy = await Player.findById(req.params.id);
    res.json(playy)
  });


  
  router.delete('/:id', async (req, res) => {
    await Player.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee Deleted'});
  });
  
  
   
  module.exports = router;
