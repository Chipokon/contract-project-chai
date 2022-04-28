const router = require('express').Router();

router.get('/', (req, res) => {
  const isAuthorized = res.locals.uid
  console.log(res.locals.uid);
  res.render('main', {isAuthorized});
});

module.exports = router;
