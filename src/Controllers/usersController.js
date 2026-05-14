<<<<<<< HEAD
const userCreate = async (req, res, next) => {
    try {
        res.send({
            message: 'Usuário criado com sucesso!'
        })


    } catch (error) {
        res.send({
            message : `Erro ao criar o usuário: ${error}`
        })        
    }
}

const userList = async (req, res, next) => {
    try {
        res.send({
            users: [
                {id : 1, name : "david"},
                {id : 2, name : 'Joao'},
                {id : 3, name : 'Maria'}
            ]
        })
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

=======
const userModel = require('../models/usersModels');
const bcrypt = require('bcrypt');

const createNewUser = async (req, res) => {
    const { first_name, surname, email, password } = req.body;
    const saltRounds = 10;

    try {
        // Verifica se o e-mail já existe
        const existingUser = await userModel.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).send({
                message: '❌ E-mail já está cadastrado.'
            });
        }

        // Gera o hash da senha com o bcrypt
        const senhaHash = await bcrypt.hash(password, saltRounds);

        // Cria um novo usuário no banco de dados
        const newUser = await userModel.create({
            first_name: first_name,
            surname: surname,
            email: email,
            password: senhaHash
        });

        // Log para debug
        console.log(`Usuario ${newUser.first_name}, ID: ${newUser.id}`);

        // Envia uma resposta de sucesso
        res.status(201).send({
            message: `Usuário criado com sucesso! ID: ${newUser.id}`
        });
    } catch (error) {
        // Trata erros e envia uma resposta de erro
        res.status(500).send({
            message: `Erro ao criar o usuário: ${error.message}`
        });
    }
};

// const getAllUsers = async (req, res) => {
//     try {
//         const users = await userModel.findAll();
//         res.status(200).send(users);
//     } catch (error) {
//         res.status(500).send({
//             message: 'Erro ao listar usuários: ' + error.message
//         });
//     }
// };

const getAllUsers = async (req, res) => {
    try {
        // Pegando o valor do parâmetro limit da query string
        const limit = parseInt(req.query.limit);  // Padrão de 5 usuários caso o parâmetro não seja fornecido
        
        // Buscando os usuários com o limite
        const users = await userModel.findAll({
            limit: limit // Aplicando o limite na consulta ao banco
        });

        res.send(users);
        
    } catch (error) {
        res.send({
            message: `❌ Erro ao listar os usuários! Erro: ${error}`
        });
    };
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
>>>>>>> master
