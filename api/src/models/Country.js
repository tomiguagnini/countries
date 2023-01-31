const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id:{
      type: DataTypes.STRING(3),
      allowNull:false,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    flag:{
      type: DataTypes.STRING(255),
      allowNull:false
    },
    continent:{
      type: DataTypes.STRING(255),
      allowNull:false
    },
    capital:{
      type: DataTypes.STRING(255),
      allowNull:false
    },
    subregion:{
      type: DataTypes.STRING(255),
      allowNull:false
    },
    area:{
      type: DataTypes.INTEGER,
      allowNull:false
    },
    population:{
      type: DataTypes.INTEGER,
      allowNull:false
    }


  });
};
