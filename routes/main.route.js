const router = require('express').Router();

router.get('/', (req, res) => {
  const isAuthorized = res.locals.uid
  console.log(res.locals.uid);
  res.render('main', {isAuthorized});
});

router.get('/lk', (req,res) =>{
  if(req.session.role === 'admin') {
    res.redirect('/admin')
  } 
  if(req.session.role === 'user'){
    res.redirect('/user')
  }
})

module.exports = router;
