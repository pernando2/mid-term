const Comment = require("../model/comment")

async function getCommentFromVideoId(req, res){
    try {
        const videoId = req.params.id;
        const comment = await Comment.find({videoID:videoId});
        
        if (!comment) {
          return res.status(404).json({ error: 'Comment tidak ditemukan.' });
        }
        res.json(comment);
      } catch (error) {
        res.status(500).json({ error: 'Gagal mendapatkan Comment dari Video.' });
      }
}

function postComment(req, res) {
    const key1 = req.query.key1;
    const comment = new Comment({
        Username: req.body.username,
        Comment: req.body.comment,
        videoID: key1,
    })
    try {
        const commentToSave = comment.save();
        res.status(200).json("Success")
    }
    catch (error) {
        res.status(400).json("Fail")
    }
}

module.exports = {getCommentFromVideoId, postComment};