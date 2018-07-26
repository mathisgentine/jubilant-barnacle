'use strict';
//Mapping des tables db pour être lues par Forest
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('availability', {

    user_id:{
      type: DataTypes.INTEGER
    },
    date_start:{
      type: DataTypes.DATEONLY
    },
    date_end:{
      type: DataTypes.DATEONLY
    },
    monday_morning:{
      type: DataTypes.BOOLEAN
    },
    monday_afternoon:{
      type: DataTypes.BOOLEAN
    },
    monday_evening:{
      type: DataTypes.BOOLEAN
    },
    tuesday_morgning:{
      type: DataTypes.BOOLEAN
    },
    tuesday_afternoon:{
      type: DataTypes.BOOLEAN
    },
    tuesday_evening:{
      type: DataTypes.BOOLEAN
    },
    wednesday_morning:{
      type: DataTypes.BOOLEAN
    },
    wednesday_afternoon:{
      type: DataTypes.BOOLEAN
    },
    wednesday_evening:{
      type: DataTypes.BOOLEAN
    },
    thursday_morning:{
      type: DataTypes.BOOLEAN
    },
    thursday_afternoon:{
      type: DataTypes.BOOLEAN
    },
    thursday_evening:{
      type: DataTypes.BOOLEAN
    },
    friday_morning:{
      type: DataTypes.BOOLEAN
    },
    friday_afternoon:{
      type: DataTypes.BOOLEAN
    },
    friday_evening:{
      type: DataTypes.BOOLEAN
    },
    saturday_morning:{
      type: DataTypes.BOOLEAN
    },
    saturday_afternoon:{
      type: DataTypes.BOOLEAN
    },
    saturday_evening:{
      type: DataTypes.BOOLEAN
    },
    sunday_morning:{
      type: DataTypes.BOOLEAN
    },
    sunday_afternoon:{
      type: DataTypes.BOOLEAN
    },
    sunday_evening:{
      type: DataTypes.BOOLEAN
    }

  }, {
    tableName: 'availability',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {

  };

  return Model;
};
