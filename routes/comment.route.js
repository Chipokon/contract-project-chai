const router = require('express').Router();
const {Comment} = require('../db/models')


router.route('/')
.get((req, res) =>{
  if (req.session.uid){
    res.render('comment')
  }
  
})
.post(async (req, res)=>{
  const {comment1} = req.body
  const {uid} = req.session
    const newComment = await Comment.create({
      user_id : uid,
      tea_id : '1',
      comment: comment1,
      createdAt: new Date(),
    })
    res.json({message: 'hello'})
  }
)




module.exports = router
