const Sequelize = require('sequelize');
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require ("../database.config/db.connection");
//IMPORT MODELS
const UserModel = require ("../model/asesor.model");

//INITIALIZE MODELS
const User = UserModel (sequelizeConnection,Sequelize);


//CREATE RELATIONS BETWEEN MODELS




//GROUP MODELS
const models = {
    User: User
};

//Create object to manage the models and database
const db = {
    ...models,
    sequelizeConnection
};

//EXPORT CONSTANT DB
module.exports = db;