const { where } = require('sequelize');
const userModel = require('../models/usersModels');

const createNewUser = async (req, res, next) => {
    
    const user = {nome, surname, email, password} = req.body;
    try {
        //CRIANDO UM USUARIO
        const newUser = await userModel.create({
            first_name:nome,
            surname:surname,
            email:email,
            password:password
        });
        //console pra mostrar o resultado do insert
        console.log(`Usuario ${newUser.first_name}, ID: ${newUser.id}`);
        
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

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userModel.findAll();
        res.send(users)
    } catch (error) {
        res.send({
            message : 'Erro ao listar usuarios'
        })
    }
}


const updateUserById = async (req, res, next) => {
    const id = parseInt(req.params.id)
    console.log(id)
    try {
        console.log(req.body.id); // Verifique o valor de req.body.id
        const exists = await userModel.findOne({
            where: {
                id: id
            }
        });

        if (exists) {
            const id = parseInt(req.params.id);
            await userModel.update(
                { ...req.body }, 
                { where: { id: id } }
            );
            console.log(req.body); // Verifique os dados recebidos
            res.status(201).send({
                message: `Usuário ${id} atualizado com sucesso`
            });
        } else {
            res.status(400).send({
                message: `Usuário não encontrado`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: `Erro ao atualizar usuário: ${error.message}`
        });
    }
};


module.exports = {
    createNewUser,
    getAllUsers,
    updateUserById
}

