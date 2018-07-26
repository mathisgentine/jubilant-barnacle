'use strict';
//Mapping des tables db pour être lues par Forest
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('users', {

    firstname:{
      type: DataTypes.TEXT
    },
    lastname:{
      type:DataTypes.TEXT
    },
    email:{
      type:DataTypes.STRING
    },
    mobile_phone:{
      type:DataTypes.STRING
    },
    country:{
      type:DataTypes.TEXT
    },
    city:{
      type:DataTypes.TEXT
    },
    postal_code:{
      type:DataTypes.INTEGER
    },
    comment:{
      type:DataTypes.STRING
    },
    referral_code:{
      type:DataTypes.STRING
    },
    genius:{
      type:DataTypes.BOOLEAN
    },
    address:{
      type:DataTypes.STRING
    },
    profile_picture:{
      type:DataTypes.STRING
    },
    product_id:{
      type:DataTypes.INTEGER
    },
    IBAN:{
      type:DataTypes.STRING
    },
    legal_status:{
      type:DataTypes.STRING
    },
    driving_license:{
      type:DataTypes.BOOLEAN
    },
    vehicle_access:{
      type:DataTypes.BOOLEAN
    }

  }, {
    tableName: 'users',
    underscored: true,
    timestamps: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {

  };

  return Model;
};
