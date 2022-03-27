const express = require ('express');
const router = express.Router();

const asesorController = require ('../controllers/asesor.controller');

router.post('/',asesorController.createAsesor);

router.get('/',asesorController.findAllAsesores);

router.delete('/:idAsesor', asesorController.deleteAsesorById);

router.put('/:idAsesor', asesorController.updateAsesorById);

module.exports = router;
