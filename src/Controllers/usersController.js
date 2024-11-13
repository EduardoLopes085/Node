const userModel = require('../models/usersModels');
const bcrypt = require('bcrypt');

const createNewUser = async (req, res) => {
    const { name, surname, email, password } = req.body;
    const saltRounds = 10;

    try {
        const senhaHash = await bcrypt.hash(password, saltRounds);
        
        const newUser = await userModel.create({
            first_name: name,
            surname: surname,
            email: email,
            password: senhaHash
        });

        console.log(`Usuario ${newUser.first_name}, ID: ${newUser.id}`);
        
        res.status(201).send({
            message: `Usuario criado com sucesso! ID: ${newUser.id}`
        });
    } catch (error) {
        res.status(500).send({
            message: `Erro ao criar o usuário: ${error.message}`
        });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({
            message: 'Erro ao listar usuários: ' + error.message
        });
    }
};

const updateUserById = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const exists = await userModel.findByPk(id);
        if (exists) {
            await userModel.update({ ...req.body }, { where: { id: id } });
            res.status(200).send({
                message: `Usuário ${id} atualizado com sucesso`
            });
        } else {
            res.status(404).send({
                message: `Usuário não encontrado`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: `Erro ao atualizar usuário: ${error.message}`
        });
    }
};

const deleteUserById = async (req, res) => {
    const id = parseInt(req.params.id);

    try {
        const user = await userModel.findByPk(id);
        if (user) {
            await userModel.destroy({ where: { id: id } });
            res.status(200).send({
                message: `🟢 Usuário de ID ${id} foi deletado com sucesso!`
            });
        } else {
            res.status(404).send({
                message: `🔴 Usuário com ID: ${id} não encontrado! 😰`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: `❌ Algo de errado aconteceu ao deletar o usuário. Erro: ${error.message}`
        });
    }
};

module.exports = {
    createNewUser,
    getAllUsers,
    updateUserById,
    deleteUserById
};
