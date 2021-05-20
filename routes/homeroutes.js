const router = require('express').Router();
const path = require('path');
//const { Cardio, Resistance, Workout } = require('../models');

router.get('/stats', async (req, res) => {
    try {
      console.log("Get /stats");
      res.sendFile(path.join(__dirname, '../public/stats.html'));
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/exercise', async (req, res) => {
    try {
      console.log("Get /exercise");
      res.sendFile(path.join(__dirname, '/../public/exercise.html'));
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
          {
            model: Comment,
            include: [
                {
                  model: User,
                  attributes: ['name'],
                },
            ],
          },
        ],
      });
  
      const post = postData.get({ plain: true });
  
      res.render('post', {
        ...post,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;