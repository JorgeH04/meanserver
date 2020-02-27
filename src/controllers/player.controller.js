const Player = require('../models/player');

const ctrl = {};

ctrl.index =  async (req, res) => {
  const players = await Player.find();
  res.json(players);
};


ctrl.createPlayer =  async (req, res) => {
  const playy = new Player(req.body);
  await playy.save();
  console.log(playy);
  //console.log(req.body);
  res.json({'status': 'emp saved'});
};


ctrl.getPlayer =  async (req, res) => {
  const playy = await Player.findById(req.params.id);
  res.json(playy)
};


ctrl.editPlayer =  function()  {
 
};


ctrl.deletePlayer = async (req, res, next) => {
  await Player.findByIdAndRemove(req.params.id);
  res.json({status: 'Employee Deleted'});
};





module.exports = ctrl;