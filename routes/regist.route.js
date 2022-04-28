const router = require('express').Router();
const { User } = require('../db/models')

// router.get('/', (req,res) => {
//   res.render('regist')
// })

router.route('/')
  .get((req, res) => {
    res.render('regist')
  })
  .post(async (req, res) => {
    const { name, email, password, role } = req.body
    const user = await User.findOne({ where: { email } })
    if (user) {
      res.send('Такой пользователь уже есть, fckn slave')
    }
    if (role === '300$') {
      const newUser = await User.create({
        email,
        name,
        email,
        password,
        role: 'admin'
      })
      req.session.uid = newUser.id;
      req.session.role = newUser.role
      res.redirect('/login')
    }
    else {
      const newUser = await User.create({
        email,
        name,
        password,
        role: 'user',
      })
      req.session.uid = newUser.id;
      req.session.role = newUser.role
      res.redirect('/login')
    }
  })

module.exports = router;
