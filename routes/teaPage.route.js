const router = require('express').Router();
const { User, Tea, Comment } = require('../db/models');

router.get('/:id', async (req,res) =>{
  const {id} = req.params;
  const comments = await Comment.findAll({
    where: {tea_id:id},
    include:[{
      model: User,
    }]
  });
  // console.log(comments[0].User);
  const tea = await Tea.findOne({where:{id:id}});
  const isAuthorized = res.locals.uid
  // const userName = await Comment.({where:{user_id}})
  res.render('teaPage', {id:tea.id, comments, picture:tea.picture, tittle:tea.tittle, place:tea.place,description:tea.description, isAuthorized})
})
.post('/:id', async(req, res)=>{
  const{comment} = req.body;
  const{uid} = req.session
  const {id} = req.params;
  const newComment = await Comment.create({
    user_id : uid,
    tea_id: id,
    comment: comment,
    createdAt: new Date(),
  })
  const user = await User.findOne({where:{id:newComment.user_id}})
  // res.json({message: 'hello'})
  res.render('comment', {layout:false, comment, name:user.name})
})
module.exports = router
