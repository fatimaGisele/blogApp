const {Post} = require('./../model/post');

const createPost = async(req, res) =>{
    try {
        let post = await Post.create(req.body);
        res.sendStatus(201).json(post);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
    
}

const showAll = async(req, res) => {
    try {
        let post = await Post.findAll();
        res.json(post);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

const findOne = async(req, res) => {
    try {
        let post = await Post.findByPk(req.params.id);
        post === null ? res.json({message: 'no se encontro post'}) : res.json(post);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

const updateOne = async(req, res) => {
    try {
        let post = await Post.update({
            where : {postID : req.params.id }
        });
        res.json(post);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

const deleteOne = async(req, res) => {
    try {
        await Post.destroy({
            where : {postID : req.params.id }
        });
        res.json({message: 'post eliminado'});
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
}

module.exports = {createPost, showAll, findOne, updateOne, deleteOne}