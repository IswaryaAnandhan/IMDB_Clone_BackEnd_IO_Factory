const express = require('express');
const router = express.Router();
const producersController = require('../controllers/producersController');

// Define routes for producers
router.get('/', producersController.getAllProducers);
router.post('/', producersController.createProducer);
router.put('/:id', producersController.updateProducer);
router.delete('/:id', producersController.deleteProducer);

module.exports = router;
