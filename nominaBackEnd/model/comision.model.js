module.exports = (sequelize, Sequelize) => {
    const Comision = sequelize.define("Comision",  {
        idComision: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipoAsesor: Sequelize.STRING,
        meta: Sequelize.INTEGER,
        porcentaje: Sequelize.INTEGER

        }, {
            tableName: "comisiones"
        });
        return Comision;
}