const imageModel = require('../models/imageModels');

// enabled name slug use_in_menu stock description price price_with_discount
const createNewImage = async (req, res) => {
    const {product_id, enabled, path} = req.body;

    try {
        const newImage = await imageModel.create({
            product_id: product_id,
            enabled: enabled,
            path: path
            
        });

        res.status(201).send({
            message: `Imagem criada com sucesso! ID: ${newImage.id}`
        });

    } catch (error) {
        res.status(400).send({
            message: `Erro ao criar o Image: ${error.message}`
        });
    }
};

const getAllImages = async (req, res) => {
    try {
        // Obtém o parâmetro "limit" da query string, ou define o valor padrão como 12
        const limit = parseInt(req.query.limit) || 12;

        // Se o valor de "limit" for -1, busca todos os Images
        const options = limit === -1 ? {} : { limit };

        // Busca os Images com base na opção definida
        const images = await imageModel.findAll(options);

        res.status(200).send({ images });
    } catch (error) {
        res.status(404).send({
            message: `Erro ao buscar images: ${error.message}`
        });
    }
};

const getImageById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        
        if (isNaN(id) || id <= 0) {
            return res.status(400).send({
                message: '❌ O ID fornecido é inválido. Por favor, forneça um ID numérico válido!'
            });
        }

        const image = await imageModel.findByPk(id);

        if (image) {
            res.status(200).send(image);
        } else {
            res.status(404).send({
                message: `🔴 image com ID: ${id} não encontrado!`
            });
        }
    } catch (error) {
        res.status(500).send({
            message: `🔴 Erro inesperado ao tentar buscar image. Erro: ${error.message}`
        });
    }
};



const updateImageById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const exist = await imageModel.findByPk(id);

        if (exist) {
            await imageModel.update(
                { ...req.body },
                { where: { id: id } }
            );
            res.status(200).send({
                message: `Image com ID ${id} atualizado com sucesso`
            });
        } else {
            res.status(404).send({
                message: `Não foi possível achar a image com ID: ${id}`
            });
        }

    } catch (error) {
        res.status(500).send({
            message: `Erro ao atualizar a image  com ID: ${id}, ${error.message}`
        });
    }
};

const deleteImageById = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const image = await imageModel.findByPk(id);

        if (image) {
            await imageModel.destroy({
                where: { id: id }
            });

            res.status(200).send({
                message: `Image de ID ${id} foi deletado com sucesso!`
            });

        } else {
            res.status(404).send({
                message: `Não foi possível achar o Image com ID: ${id}`
            });
        }

    } catch (error) {
        res.status(500).send({
            message: `Erro ao deletar o Image com ID: ${id}, ${error.message}`
        });
    }
};

module.exports = {
    createNewImage,
    getAllImages,
    updateImageById,
    deleteImageById,
    getImageById
};















































