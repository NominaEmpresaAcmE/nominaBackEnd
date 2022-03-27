const dbManager = require ('../database.config/db.manager');

//Creation new asesor

async function createAsesor (req,res) {

    const newAsesorObject = {
        email: req.body.email,
        nombre: req.body.nombre,
        edad: req.body.edad,
        direccion: req.body.direccion,
        cargo: req.body.cargo
    }

    dbManager.Asesor.create(newAsesorObject).then(
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

//FindAll asesores
async function findAllAsesores (req, res){
    try {
        //Execute query
        const asesores = await dbManager.Asesor.findAll ();
        
        //Send response
        res.json({
                data: asesores
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

async function deleteAsesorById (req, res ) {

        try {
        const {idAsesor} = req.params;

        const user = await dbManager.Asesor.destroy(
            {
                where: {
                    idAsesor: idAsesor
                }
            }
        );
        res.send('asesor with id: ' + idAsesor + ' delete');
        } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}

async function updateAsesorById (req,res) {

    try {
    const {idAsesor} = req.params;

    const asesor = await dbManager.Asesor.update(
        {   email: req.body.email,
            nombre: req.body.nombre,
            edad: req.body.edad,
            direccion: req.body.direccion,
            cargo: req.body.cargo}, {
                where: {
                    idAsesor: idAsesor
                }
            }      
    ); 
    res.send(' Asesor with id: ' + idAsesor + ' update');
    } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}

async function findAsesorById (req,res) {
    try {
        //Execute query
        
        const {idAsesor} = req.params;
        const asesores = await dbManager.Asesor.findOne (
            {
                where: {
                    idAsesor: idAsesor
                }
            }
        );
        
        //Send response
        res.json({
                data: asesores
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

exports.findAsesorById = findAsesorById;
exports.updateAsesorById = updateAsesorById;
exports.deleteAsesorById = deleteAsesorById;
exports.createAsesor = createAsesor;
exports.findAllAsesores = findAllAsesores;