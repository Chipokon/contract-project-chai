module.exports = (req, res, next) => {
  if(req.session.user) {
    res.locals.isAuth = true;
    res.locals.user = req.session.user
  }
  return next()
}
