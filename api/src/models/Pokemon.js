const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      hp: {
        type: DataTypes.INTEGER,
        validate: { min: 1 },
      },
      attack: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 1000,
        },
      },
      defense: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 1000,
        },
      },
      velocity: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 1000,
        },
      },
      height: {
        type: DataTypes.FLOAT,
        validate: {
          min: 1,
        },
      },
      weight: {
        type: DataTypes.FLOAT,
        validate: {
          min: 1,
        },
      },
      date_added: {
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
      },
      createdInDb: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Propios",
      },
      image: {
        type: DataTypes.STRING,
        allowNullNull: true,
      },
    },
    { timestamps: false }
  );
};
