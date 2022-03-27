//IMPORT SEQUELIZE
const Sequelize = require('sequelize');
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require ("../database.config/db.connection");
//IMPORT MODELS
const AsesorModel = require ("../model/asesor.model");
const VentaModel = require ("../model/venta.model");
const NominaModel = require ("../model/nomina.model");
const ComisionModel = require ("../model/comision.model");

//INITIALIZE MODELS
const Asesor = AsesorModel (sequelizeConnection,Sequelize);
const Venta = VentaModel (sequelizeConnection, Sequelize);
const Nomina = NominaModel (sequelizeConnection, Sequelize);
const Comision = ComisionModel (sequelizeConnection, Sequelize);

//CREATE RELATIONS BETWEEN MODELS

Asesor.hasMany (Venta, {foreignKey: 'idVenta', constraints: false});
Venta.belongsTo (Asesor, {foreignKey: 'idAsesor', constraint: false});

Asesor.hasMany (Nomina, {foreignKey: 'idNomina', constraints: false});
Nomina.belongsTo (Asesor, {foreignKey: 'idAsesor', constraint: false});

Nomina.hasMany (Comision, {foreignKey: 'idComision', constraints: false});
Comision.belongsTo (Nomina, {foreignKey: 'idNomina', constraint: false});

//GROUP MODELS
const models = {
    Asesor: Asesor,
    Venta: Venta,
    Nomina: Nomina,
    Comision: Comision
};

//Create object to manage the models and database
const db = {
    ...models,
    sequelizeConnection
};

//EXPORT CONSTANT DB
module.exports = db;