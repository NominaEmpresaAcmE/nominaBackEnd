const dbManager = require ('../database.config/db.manager');

//Creation new nomina

async function createNomina (req,res) {

    const newNominaObject = {
        fechaNomina: req.body.fechaNomina,
        salarioNeto: req.body.salarioNeto,
        salud: req.body.salud,
        pension: req.body.pension,
        riesgosLab: req.body.riesgosLab,
        idAsesor: req.body.idAsesor
    }

    dbManager.Nomina.create(newNominaObject).then(
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

//FindAll users
async function findAllNominas (req, res){
    try {
        //Execute query
        const nominas = await dbManager.Nomina.findAll ();
        
        //Send response
        res.json({
                data: nominas
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

async function deleteNominaById (req, res ) {

        try {
        const {idNomina} = req.params;

        const nomina = await dbManager.Nomina.destroy(
            {
                where: {
                    idNomina: idNomina
                }
            }
        );
        res.send('nomina with id: ' + idNomina + ' delete');
        } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}

async function updateNominaById (req,res) {

    try {
    const {idNomina} = req.params;

    const nomina = await dbManager.Nomina.update(
        {   fechaNomina: req.body.fechaNomina,
            salarioNeto: req.body.salarioNeto,
            salud: req.body.salud,
            pension: req.body.pension,
            riesgosLab: req.body.riesgosLab,
            idAsesor: req.body.idAsesor}, {
                where: {
                    idNomina: idNomina
                }
            }      
    ); 
    res.send('Nomina with id: ' + idNomina + ' update');
    } catch (e) {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
}

async function findNominaById (req,res) {
    try {
        //Execute query
        
        const {idNomina} = req.params;
        const nomina = await dbManager.Nomina.findOne (
            {
                where: {
                    idNomina: idNomina
                }
            }
        );
        
        //Send response
        res.json({
                data: nomina
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

async function findAllNominasByIdAsesor (req,res) {

    try {
        //Execute query
      
        const {idAsesor} = req.params;
        const nominas = await dbManager.Nomina.findAll (
            {
                where: {
                    idAsesor: idAsesor
                }
            }
        );
        
        //Send response
        res.json({
                data: nominas
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

exports.findAllNominasByIdAsesor = findAllNominasByIdAsesor;
exports.findNominaById = findNominaById;
exports.updateNominaById = updateNominaById;
exports.deleteNominaById = deleteNominaById;
exports.createNomina = createNomina;
exports.findAllNominas = findAllNominas;