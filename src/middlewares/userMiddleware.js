

const middlewareCreateNewUser = (req, res) => {
    const {nome, sobrenome, email, senha} = req.body;
    try {
        if(!nome || !sobrenome || !email || !senha){
            res.send({
                message: `Erro ao criar o usuário: `
            })
        }
    } catch (error) {
        res.status(400).send({
            message: `Erro ao criar o usuário: ${error}`
        })
    }
}


module.exports = {
    middlewareCreateNewUser
}





