
const middlewareCreateNewUser = (req, res, next) => {
    const {name, surname, email, password} = req.body;
    try {
        if(!name || !surname || !email || !password){
            res.send({
                message: `Por favor preencha todos os dados `
            })
        }
        next()
    } catch (error) {
        res.status(400).send({
            message: `Erro ao criar o usuário: ${error}`
        })
    }
}


module.exports = {
    middlewareCreateNewUser
}





