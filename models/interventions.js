'use strict';
//Mapping des tables db pour être lues par Forest
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('interventions', {

    booking_request_id:{
      type:DataTypes.INTEGER
    },
    state:{
      type:DataTypes.STRING
    },
    client_id:{
      type:DataTypes.INTEGER
    },
    issue_id:{
      type:DataTypes.INTEGER
    },
    issue_description:{
      type:DataTypes.STRING
    },
    product_id:{
      type:DataTypes.INTEGER
    },
    genius_id:{
      type:DataTypes.INTEGER
    },
    intervention_time:{
      type:DataTypes.DATE
    },
    remote:{
      type:DataTypes.BOOLEAN
    },
    address:{
      type:DataTypes.STRING
    },
    postal_code:{
      type: DataTypes.INTEGER
    },
    duration:{
      type:DataTypes.INTEGER
    },
    price:{
      type:DataTypes.INTEGER
    },
    payment_status:{
      type:DataTypes.STRING
    },
    comment:{
      type:DataTypes.STRING
    }

  }, {
    tableName: 'interventions',
    underscored: true,
    timestamps: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {

  };

  return Model;
};
