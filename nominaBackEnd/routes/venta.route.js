const express = require ('express');
const router = express.Router();

const ventaController = require ('../controllers/venta.controller');

router.post('/',ventaController.createVenta);

router.get('/',ventaController.findAllVentas);

router.delete('/:idVenta', ventaController.deleteVentaById);

router.put('/:idVenta', ventaController.updateVentaById);

module.exports = router;