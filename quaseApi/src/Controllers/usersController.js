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

