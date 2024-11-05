const usersModels = require('../models/usersModels')
const userCreate = async (req, res, next) => {
    try {
        //CRIANDO UM USUARIO
        const newUser = await usersModels.create({
            first_name: req.body.first_name,
            surname: req.body.surname,
            email:req.body.email,
            password:req.body.password
        });
        //console pra mostrar o resultado do insert
        console.log("Usuario criado com sucesso!:", newUser.id);
        
        //resposta da requisição

        res.status(201).send({
            message: `Usuario criado com sucesso! ID: ${newUser.id}`
        })
    } catch (error) {
        res.send({
            message : `Erro ao criar o usuário: ${error}`
        })        
    }
}

const userList = async (req, res, next) => {
    try {
        const users = await usersModels.findAll();
        res.send(users)
    } catch (error) {
        res.send({
            message : 'Erro ao listar usuarios'
        })
    }
}



module.exports = {
    userCreate,
    userList
}

