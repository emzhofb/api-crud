const express = require('express');
const router = express.Router();

const dataController = require('../../controllers/data');
const { checkAuth } = require('../../middlewares/auth');

router.get('/', checkAuth, dataController.readData);
router.post('/', checkAuth, dataController.addData);
router.post('/:id', checkAuth, dataController.editData);
router.get('/:id', checkAuth, dataController.deleteData);

module.exports = router;
