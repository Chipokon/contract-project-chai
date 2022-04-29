const router = require('express').Router()
const { Tea } = require('../db/models')

router.route('/')
  .get(async (req, res) => {
    const point = await Tea.findAll({ raw: true })
    res.json({ point })
  })
module.exports = router
