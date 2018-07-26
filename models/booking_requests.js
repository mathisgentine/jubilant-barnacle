'use strict';
//Mapping des tables db pour être lues par Forest
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('booking_requests', {

    state:{
      type:DataTypes.STRING
    },
    client_id:{
      type:DataTypes.INTEGER
    },
    channel:{
      type:DataTypes.STRING
    },
    preferred_time:{
      type:DataTypes.DATE
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
    excluded_geniuses:{
      type:DataTypes.STRING
    },
    time_accepted:{
      type:DataTypes.DATE
    },
    remote:{
      type:DataTypes.BOOLEAN
    },
    address:{
      type:DataTypes.STRING
    },
    postal_code:{
      type:DataTypes.INTEGER
    },
    intervention_id:{
      type:DataTypes.STRING
    }
  }, {
    tableName: 'booking_requests',
    underscored: true,
    timestamps: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {

  };

  return Model;
};
