const express = require ('express');
const router = express.Router();

const comisionController = require ('../controllers/comision.controller');

router.post('/',comisionController.createComision);

router.get('/',comisionController.findAllComisiones);

router.delete('/:idNomina', comisionController.deleteComisionById);

router.put('/:idNomina', comisionController.updateComisionById);

module.exports = router;