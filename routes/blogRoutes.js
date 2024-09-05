const express = require('express');
const blogController = require('../controllers/blogController');

const router = express.Router();

router.get('/',blogController.blog_index);
router.post('/', blogController.blog_post)
router.get('/create', blogController.blog_create);
router.get('/:id', blogController.blog_detail)
router.delete('/:id', blogController.blog_delete);

module.exports = router;