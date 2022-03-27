const express = require ('express');
const router = express.Router();

const nominaController = require ('../controllers/nomina.controller');

router.post('/',nominaController.createNomina);

router.get('/',nominaController.findAllNominas);

router.delete('/:idNomina', nominaController.deleteNominaById);

router.put('/:idNomina', nominaController.updateNominaById);

router.get('/:idAsesor', nominaController.findAllNominasByIdAsesor);

module.exports = router;