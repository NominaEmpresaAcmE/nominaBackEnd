module.exports = (sequelize, Sequelize) => {
    const Nomina = sequelize.define("Nomina",  {
        idNomina: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fechaNomina: Sequelize.DATE,
        salarioNeto: Sequelize.INTEGER,
        salud: Sequelize.INTEGER,
        pension: Sequelize.INTEGER,
        riesgosLab: Sequelize.INTEGER,
        cliente: Sequelize.STRING

        }, {
            tableName: "nominas"
        });
        return Nomina;
}