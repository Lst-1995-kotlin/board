var express = require('express');
const { where } = require('sequelize');
var router = express.Router();

/* GET home page. */
router.post("/board/write",async function(req, res){
  var board= req.body
  var createdBoard = await sequelize.models.board.create(board)
  res.json(createdBoard)
})
router.get("/board/:no", async function(req,res){
  var no = req.params.no
  var board = await sequelize.models.board.findByPk(no)
  board.viewCount++
  await board.save()
  res.json(board)
})
router.post("/board/list", async function (req, res) {
  var page = req.body.page || 1
  var offset = (page - 1) * 10
  var boardList = await sequelize.models.board.findAll({
    limit: 10,
    offset: offset,
    order:[["writeDate", "DESC"], ["no", "DESC"]]
  })
  var totalCount = await sequelize.models.board.count()
  var totalPage=Math.ceil(totalCount/10 )

  res.json({
    boardList: boardList,
    totalPage: totalPage
  })
})
router.delete("/board/:no", async function(req,res){
  var no = req.params.no
  await sequelize.models.board.destroy({
    where: {
      no:no
    }
  })
  res.json({
    result: "success"
  })
})
router.post("/board/modify", async function (req, res) {
  await sequelize.models.board.update({
    title:req.body.title,
    content:req.body.content,
    writer:req.body.writer
  },{
    where: {
      no: req.body.no
    }
  })
  res.json({
    result: "success"
  })
})
module.exports = router;
