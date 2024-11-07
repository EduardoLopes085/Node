const userModel = require('../models/usersModels');
const bcrypt = require('bcrypt')

const createNewUser = async (req, res, next) => {
    
    const {name, surname, email, password} = req.body;
    const saltRounds = 10 // salteamento da senha do bcrypt

    //a senhaHast recebe a senha criptografada usando a libe bcrypt com o metodo hash
    const senhaHast = await bcrypt.hash(password, saltRounds)

    try {
        //CRIANDO UM USUARIO
        const newUser = await userModel.create({
            first_name: name,
            surname:surname,
            email:email,
            password: senhaHast
        });
        //console pra mostrar o resultado do insert
        console.log(`Usuario ${newUser.first_name}, ID: ${newUser.id}`);
        
        //resposta da requisição

        res.status(201).send({
            message: `Usuario criado com sucesso! ID: ${newUser.id}`
        })
    }catch(error) {
        res.send({
            message : `Erro ao criar o usuário aaaaaaaaaaaaaa: ${error}`
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
    const exists = await userModel.findByPk(id);
    try {
        if (exists) {
            await userModel.update(
                { ...req.body }, 
                { where: { id: id } }
            );
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


function deleteUserById (req, res) {
    const { id } = req.params;
    const user = userModel.findIndex();

    if (animeIndex === -1) {
        return res.status(404).send("🔴 Anime não encontrado 😰");
    }

    listaAnimes.splice (animeIndex, 1); //.splice é o método que removerá informações de dentro de um array.

    res.status(200).send('🟢 Anime deletado da lista! ❌')
}





module.exports = {
    createNewUser,
    getAllUsers,
    updateUserById
}

