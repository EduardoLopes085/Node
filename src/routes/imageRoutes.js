const express = require('express')
const router = express.Router()
const imageController = require('../Controllers/imageController')


//rota imagens

router.post('/image-create', imageController.createNewImage);

router.get('/image-list', imageController.getAllImages);

router.put('/image-update/:id', imageController.updateImageById);

router.delete('image-delete/:id', imageController.deleteImageById)

module.exports = router
  

  
  
