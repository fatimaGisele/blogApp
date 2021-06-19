const {Router} = require('express');
const router = Router();
const {createPost, showAll, findOne, updateOne, deleteOne} = require('../controller/post');
const {validatePost, validateId} = require('./../middleware/action/post');

router.post('/',validatePost, createPost);
router.get('/', showAll);
router.get('/:id', findOne);
router.patch('/:id', validateId, validatePost,updateOne);
router.delete('/id', validateId, deleteOne);

module.exports = router;