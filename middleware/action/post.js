const {schema} = require('./../schema/post');

const validatePost = (req, res, next) => {
    const {error, value} = schema.createPost.validate(req.body);
    error ? res.status(422).json({message: 'datos incorrectos'}) : next();
}

const validateId = (req, res, next) => {
    const {error, value} = schema.validId.validate(req.params.id);
    error ? res.status(422).json({message: 'id incorrecto'}) : next();
}

module.exports = {validatePost, validateId}
