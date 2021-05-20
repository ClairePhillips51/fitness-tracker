const router = require('express').Router();
const path = require('path');
//const { Cardio, Resistance, Workout } = require('../models');

router.get('/stats', async (req, res) => {
    try {
      res.sendFile(path.join(__dirname, '../public/stats.html'));
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/exercise', async (req, res) => {
    try {
      res.sendFile(path.join(__dirname, '/../public/exercise.html'));
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;