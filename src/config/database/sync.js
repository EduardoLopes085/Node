// const connection = require('./connection');
// require('../../models/usersModels');

// (async () => {
//     try {
//         await connection.authenticate();
//         await connection.sync({alter:true})
//         console.log('conexão com o banco estabelecida com sucesso!')
//     } catch (error) {
//         console.log(`Erro ao tentar conexão com o banco: ${error}`)
//     }finally{
//         await connection.close();
//         console.log('Conexão com o banco de dados encerrada')
//     }
// })();


const connection = require('./connection')

require('../../models/usersModels'); //SE TIRAR O CODIGO QUEBRA KKKKKKKKKKKKKKKK

(async () => {
    try {
        await connection.authenticate();
        await connection.sync({alter:true})
        console.log('conexão com o banco estabelecida com sucesso!')
    } catch (error) {
        console.log(`Erro ao tentar conexão com o banco: ${error}`)
    }finally{
        await connection.close();
        console.log('Conexão com o banco de dados encerrada')
    }
})();































