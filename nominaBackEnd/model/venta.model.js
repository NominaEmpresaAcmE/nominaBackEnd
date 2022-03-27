module.exports = (sequelize, Sequelize) => {
    const Venta = sequelize.define("Venta",  {
        idVenta: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fechaVenta: Sequelize.DATE,
        nombre: Sequelize.STRING,
        valor: Sequelize.INTEGER,
        cliente: Sequelize.STRING

        }, {
            tableName: "ventas"
        });
        return Venta;
}