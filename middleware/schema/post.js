const Joi = require('joi');

const CreatePost = {
    title:    Joi.string().required(),
    contents: Joi.string().required(),
    img:      Joi.string().pattern(new RegExp('(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)')).required(),
    category: Joi.string().required()
}

const schema = {
    createPost : Joi.object().keys({
    CreatePost    
    }),
    validId : Joi.object().keys({
        id:       Joi.number().integer().positive().required(),
        ...CreatePost
    })
}

module.exports = {schema}