const dbManager = require ('../database.config/db.manager');

//Creation new venta

async function createVenta (req,res) {

    const newVentaObject = {

        fechaVenta: req.body.fechaVenta,
        nombre: req.body.nombre,
        valor: req.body.valor,
        cliente: req.body.cliente,
        idAsesor: req.body.idAsesor
    }

    dbManager.Venta.create(newVentaObject).then(
        data => {
            res.send(data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}

//FindAll ventas
async function findAllVentas (req, res){
    try {
        //Execute query
        const ventas = await dbManager.Venta.findAll ();
        
        //Send response
        res.json({
                data: ventas
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

async function deleteVentaById (req, res ) {

        try {
        const {idVenta} = req.params;

        const venta = await dbManager.Venta.destroy(
            {
                where: {
                    idVenta: idVenta
                }
            }
        );
        res.send('venta with id: ' + idVenta + ' delete');
        } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}

async function updateVentaById (req,res) {

    try {
    const {idVenta} = req.params;

    const venta = await dbManager.Venta.update(
        {   fechaVenta: req.body.fechaVenta,
            nombre: req.body.nombre,
            valor: req.body.valor,
            cliente: req.body.cliente,
            idAsesor: req.body.idAsesor}, {
                where: {
                    idVenta: idVenta
                }
            }      
    ); 
    res.send('Venta with id: ' + idVenta + ' update');
    } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}

async function findVentaById (req,res) {
    try {
        //Execute query
        
        const {idVenta} = req.params;
        const ventas = await dbManager.Venta.findOne (
            {
                where: {
                    idVenta: idVenta
                }
            }
        );
        
        //Send response
        res.json({
                data: ventas
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    } 
}

async function findAllVentasByIdAsesor (req,res) {

    try {
        //Execute query
      
        const {idAsesor} = req.params;
        const ventas = await dbManager.Venta.findAll (
            {
                where: {
                    idAsesor: idAsesor
                }
            }
        );
        
        //Send response
        res.json({
                data: ventas
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

exports.findAllVentasByIdAsesor = findAllVentasByIdAsesor;
exports.findVentaById = findVentaById;
exports.updateVentaById = updateVentaById;
exports.deleteVentaById = deleteVentaById;
exports.createVenta = createVenta;
exports.findAllVentas = findAllVentas;