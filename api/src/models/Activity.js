const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id:{
            type: DataTypes.STRING(5),
            allowNull:false,
            primaryKey:true
        },
        name:{
            type: DataTypes.STRING(255),
            allowNull: false
        },
        difficulty:{
            type: DataTypes.ENUM('1','2','3','4','5'),
            allowNull: false
        },
        season:{
            type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'),
            allowNull: false
        }
    }, {
        timestamps: false
      })
}