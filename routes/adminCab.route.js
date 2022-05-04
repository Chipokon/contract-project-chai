const router = require('express').Router();
const { Tea } = require('../db/models');

router.get('/', async (req, res) => {
  if (req.session.role === 'admin') {
    const everyTea = await Tea.findAll();
    // console.log(everyTea);
    res.render('adminCab', { everyTea });
  } else {
    res.redirect('/');
  }
});

router.post('/', async (req, res) => {
  const {
    tittle, place, picture, description,
  } = req.body;
  const newTea = await Tea.create({
    tittle, place, picture, description,
  });
  // console.log(title, place, picture, description);
  res.render('cardToAdd', {
    layout: false,
    id: newTea.id,
    tittle,
    place,
    picture,
    description,
  });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.body;
  const deleteTea = await Tea.destroy({ where: { id } });
  console.log(deleteTea);
  res.json({ id });
});

module.exports = router;
