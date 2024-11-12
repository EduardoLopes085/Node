const { where } = require('sequelize');
const productModel = require('../models/productsModel');
const productsModel = require('../models/productsModel')


//enabled name slug use_in_menu stock description price price_with_discount
const createNewProduct = async (req, res) =>{
    const {name, slug, use_in_menu, description, price, price_with_discount} = req.body; 
    
    try {
        const newProduct = await productsModel.create({
            name : name,
            slug : slug,
            use_in_menu : use_in_menu,
            description: description,
            price: price,
            price_with_discount: price_with_discount
        })

        res.status(201).send({
            message: `Produto criado com sucesso! ID: ${newUser.id}`
        })


    } catch (error) {
        res.status(400).send({
            message: `caiu no catch do controller Error: ${error}`
        })
    }



}

const getAllProduct = async (req, res) =>{
    try {
        const product = await productModel.findAll();
        req.status(200).send({product})

    } catch (error) {
        res.status(404).send({
            message: `caiu no catch do controller Error: ${error}`
        })
    }
}



const updateProductById = async (req, res) =>{
    try {
       const id = parseInt(req.params.id) //olha o outro controler duvida 
       const exist = await productModel.findByPk(id)

        if(exist){
            await productModel.update(
                { ...req.body }, 
                { where: { id: id } }
            );
            res.status(200).send({
                message: `Produto com ${id} atualizado com sucesso`
            })
        }else{
            res.status(404).send({
                message: `Não foi possível achar o produto com Id: ${id}`
            })
        }


    } catch (error) {
        res.status(404).send({
            message: `Não foi possível achar o produto com Id: ${id}`
        })
    }
}



const deleteProductById = async (req, res) =>{
    try {
        const id = parseInt(req.params.id)
        const produc = productModel.findByPk(id)

        if(produc){
            await productModel.destroy({
                where: {id : id}
            })

            res.status(200).send({
                message: `produto de ID ${id} foi deletado com sucesso!`
            })

        }else{
            res.status(404).send({
                message: `Não foi possível achar o produto com Id: ${id}`
            })
        }


    } catch (error) {
        res.status(404).send({
            message: `Não foi possível achar o produto com Id: ${id}`
        })
    }
}



module.exports = {
    createNewProduct,
    getAllProduct,
    updateProductById,
    deleteProductById
}















































