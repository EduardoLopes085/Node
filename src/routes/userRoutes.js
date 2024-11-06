const express = require('express')
const router = express.Router()
const usersControllers = require('../Controllers/usersController')
const usersMiddlewares = require('../middlewares/userMiddleware');

//rota login

router.get('/user-list',  usersControllers.getAllUsers);

router.post('/user-create', usersMiddlewares.middlewareCreateNewUser, usersControllers.createNewUser);

router.put('/user-update/:id', usersControllers.updateUserById);



module.exports = router
  

  
  
