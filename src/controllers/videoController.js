const Video = require("../model/video")

function postVideo(req, res) {
    // const { thumbnailUrl} = req.body
    const video = new Video({
        thumbnailUrl: req.body.thumbnailUrl,
    })
    try {
        const videoToSave = video.save();
        res.status(200).json({ message: 'Video berhasil ditambahkan.', data: videoToSave})
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function getAllVideo (req, res){
    try {
        const movies = await Video.find();
        res.json(movies)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {postVideo,getAllVideo};