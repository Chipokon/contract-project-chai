const router = require('express').Router();
const { User } = require('../db/models');


router.get('/', async (req, res) => {
  const isAuthorized = req.session.uid;
  // console.log(234567890);
  // console.log(req.session.uid);
  const user = await User.findByPk(req.session.uid);

  res.render('login', {
    isAuthorized,
    user,
  });
});


router.route('/')
  .get((req, res) => {
    res.render('login');
  })
  .post(async (req, res) => {

    const { email, password } = req.body

    const user = await User.findOne({ where: { email, password } })
    if (user) {
      req.session.uid = user.id
      req.session.role = user.role
      res.redirect('/main')
    } else {
      res.send('у тебя хромосом, как у броколи');
    }
  });

// router.get('/', (req,res) => {
//     res.render('login')
//   })
module.exports = router;
