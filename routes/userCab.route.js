const router = require('express').Router();
const { Comment, User } = require('../db/models');

router.get('/', async (req, res) => {
  if (req.session.role === 'user') {
    const id = req.session.uid;
    const user = await User.findOne({ where: { id } });
    const everyTea = await Comment.findAll({ where: { user_id: id } });
    // console.log(everyTea);
    res.render('userCab', { everyTea, name: user.name });
  } else {
    res.redirect('/main');
  }
});

module.exports = router;
