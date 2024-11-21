const userModel = require('../models/usersModels')

async function middlewareCreateNewUser(req, res, next) {
    const { nome, sobrenome, email, senha } = req.body;
    try {
        if (!nome || !sobrenome || !email || !senha) {
           return res.status(400).send({
                message: '❌ Os dados fornecidos estão incompletos. Por favor insira todos os dados!'
            });
        }

        const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
        if (!senhaRegex.test(senha)) {
                      
            return res.status(400).send({
                message: '❌ A senha deve possuir pelo menos um número, uma letra maiúscula e um caractere especial!'
            });
        }

        const nomeRegex = /[^\w\s]/;
        if (!nomeRegex.test(nome) || !nomeRegex.test(sobrenome)) {
                      
            return res.status(400).send({
                message: '❌ O nome ou sobrenome possui caracteres inválidos!'
            });
        }

        const emailRegex = /^[^\s@]+@(hotmail|yahoo|gmail|outlook)\.com$/;
        if (!emailRegex.test(email)) {
                      
            return res.status(400).send({
                message: '❌ E-mail inválido!'
            });
        }

        const allredyExist = await Usuario.findOne({ where: { email } });
        if (allredyExist) {
            return res.status(400).send({
                message: '❌ E-mail inserido já cadastrado!'
            });
        }


        next(); 
    } catch (error) {
        res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao tentar criar o usuário. Erro: ${error}`
        });
    };
};

async function middlewareUpdateUserById(req, res, next) {
    const { nome, sobrenome, email, senha } = req.body;
    const user = await userModel.findByPk(id);
    try {
        if (!nome && !sobrenome && !email && !senha) {
            return res.status(400).send({
                message: '❌ Nenhum dado foi fornecido para atualizar o usuário!'
            });
        }
        if (!user) {
            res.status(400).send({
                message: `🔴 Usuário Não encontrado! 😰`
            })
        }
        
        const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
        if (!senhaRegex.test(senha)) {
                      
            return res.status(400).send({
                message: '❌ A senha deve possuir pelo menos um número, uma letra maiúscula e um caractere especial!'
            });
        }

        const nomeRegex = /[^\w\s]/;
        if (!nomeRegex.test(nome) || !nomeRegex.test(sobrenome)) {
                      
            return res.status(400).send({
                message: '❌ O nome ou sobrenome possui caracteres inválidos!'
            });
        }

        const emailRegex = /^[^\s@]+@(hotmail|yahoo|gmail|outlook)\.com$/;
        if (!emailRegex.test(email)) {
                      
            return res.status(400).send({
                message: '❌ E-mail inválido!'
            });
        }      
        
        next();
    } catch (error) {
        res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao atualizar o usuário. Erro: ${error}`
        });
    }
};

async function middlewareDeleteUserById(req, res, next) {
    const id = parseInt(req.params.id);
    const user = await userModel.findByPk(id);

    try {
        if (isNaN(id) || id <= 0) {
            return res.status(400).send({
                message: '❌ O ID fornecido é inválido. Por favor, forneça um ID numérico válido!'
            });
        }
        if (!user) {
            res.status(404).send({
                message: `🔴 Usuário com ID: ${id} não encontrado! 😰`
            });
        }
        next();
    } catch (error) {
        res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao deletar o usuário. Erro: ${error}`
        });
    };
};



module.exports = {
    middlewareCreateNewUser,
    middlewareUpdateUserById,
    middlewareDeleteUserById
}




