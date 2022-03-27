const dbManager = require ('../database.config/db.manager');

//Creation new comision

async function createComision (req,res) {

    const newComisionObject = {
        tipoAsesor: req.body.tipoAsesor,
        meta: req.body.meta,
        porcentaje: req.body.porcentaje,
        idNomina: req.body.idNomina
    }

    dbManager.Comision.create(newComisionObject).then(
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

//FindAll comisiones
async function findAllComisiones (req, res){
    try {
        //Execute query
        const comisiones = await dbManager.Comision.findAll ();
        
        //Send response
        res.json({
                data: comisiones
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

async function deleteComisionById (req, res ) {

        try {
        const {idComision} = req.params;

        const comision = await dbManager.Comision.destroy(
            {
                where: {
                    idComision: idComision
                }
            }
        );
        res.send('comision with id: ' + idComision + ' delete');
        } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}

async function updateComisionById (req,res) {

    try {
    const {idComision} = req.params;

    const comision = await dbManager.Comision.update(
        {   tipoAsesor: req.body.tipoAsesor,
            meta: req.body.meta,
            porcentaje: req.body.porcentaje,
            idNomina: req.body.idNomina}, {
                where: {
                    idComision: idComision
                }
            }      
    ); 
    res.send('comision with id: ' + idComision + ' update');
    } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}

async function findComisionById (req,res) {
    try {
        //Execute query
        
        const {idComision} = req.params;
        const comisiones = await dbManager.Comision.findOne (
            {
                where: {
                    idComision: idComision
                }
            }
        );
        
        //Send response
        res.json({
                data: comisiones
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

async function findAllComisionesByIdNomina (req,res) {

    try {
        //Execute query
      
        const {idNomina} = req.params;
        const comisiones = await dbManager.Comision.findAll (
            {
                where: {
                    idNomina: idNomina
                }
            }
        );
        
        //Send response
        res.json({
                data: comisiones
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

exports.findAllComisionesByIdNomina = findAllComisionesByIdNomina;
exports.findComisionById = findComisionById;
exports.updateComisionById = updateComisionById;
exports.deleteComisionById = deleteComisionById;
exports.createComision = createComision;
exports.findAllComisiones = findAllComisiones;