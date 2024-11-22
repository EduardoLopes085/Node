const userModel = require('../models/usersModels');

async function middlewareCreateNewUser(req, res, next) {
    const { first_name, surname, email, password } = req.body;
    try {
        if (!first_name || !surname || !email || !password) {
            return res.status(400).send({
                message: '❌ Os dados fornecidos estão incompletos. Por favor insira todos os dados! \n Middleware'
            });
        }

        const nomeRegex = /^[a-zA-ZÀ-ÿ]+(?: [a-zA-ZÀ-ÿ]+)*$/;

        if (!nomeRegex.test(first_name) || !nomeRegex.test(surname)) {
            return res.status(400).send({
                message: '❌ O nome ou sobrenome possui caracteres inválidos! Apenas letras são permitidas.'
            });
        }

        const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
        if (!senhaRegex.test(password)) {
            return res.status(400).send({
                message: '❌ A senha deve possuir pelo menos um número, uma letra maiúscula, um caractere especial, e não pode ser composta apenas por espaços ou aspas! \n Middleware'
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send({
                message: '❌ E-mail inválido! \n Middleware'
            });
        }

        next();
    } catch (error) {
        res.status(500).send({
            message: `🔴 Algo de errado aconteceu ao tentar criar o usuário. Erro: ${error.message}`
        });
    }
};

async function middlewareUpdateUserById(req, res, next) {
    const { first_name, surname, email, password } = req.body;
    const user = await userModel.findByPk(req.params.id);
    try {
        if (!first_name && !surname && !email && !password) {
            return res.status(400).send({
                message: '❌ Nenhum dado foi fornecido para atualizar o usuário! \n Middleware'
            });
        }
        if (!user) {
            return res.status(400).send({
                message: `🔴 Usuário Não encontrado! 😰 \n Middleware`
            });
        }

        if (password && !/^(?!.*[\s'"`]).{8,}(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).*$/.test(password)) {
            return res.status(400).send({
                message: '❌ A senha deve possuir pelo menos um número, uma letra maiúscula, um caractere especial, e não pode ser composta apenas por espaços ou aspas! \n Middleware'
            });
        }

        const nomeRegex = /^[a-zA-ZÀ-ÿ]+$/;
        if ((first_name && !nomeRegex.test(first_name)) || (surname && !nomeRegex.test(surname))) {
            return res.status(400).send({
                message: '❌ O nome ou sobrenome possui caracteres inválidos! \n Middleware'
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
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
            return res.status(404).send({
                message: `🔴 Usuário com ID: ${id} não encontrado! 😰`
            });
        }
        next();
    } catch (error) {
        res.status(400).send({
            message: `🔴 Algo de errado aconteceu ao deletar o usuário. Erro: ${error}`
        });
    }
};

module.exports = {
    middlewareCreateNewUser,
    middlewareUpdateUserById,
    middlewareDeleteUserById
};