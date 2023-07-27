const Product = require("../model/product")

function postProduct(req, res) {
    const product = new Product({
        Title: req.body.title,
        Price: req.body.price,
        LinkProduct: req.body.linkproduct,
    })
    try {
        const productToSave = product.save();
        res.status(200).json({ message: 'Product berhasil ditambahkan.', data: productToSave})
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
}

async function getProductFromVideoId(req, res){
    try {
        const videoId = req.params.id;
        const product = await Product.find({videoID:videoId});
        
        if (!product) {
          return res.status(404).json({ error: 'Product tidak ditemukan.' });
        }
        res.json(product);
      } catch (error) {
        res.status(500).json({ error: 'Gagal mendapatkan Product dari Video.' });
      }
}

module.exports = {postProduct, getProductFromVideoId};