'use strict';
//Mapping des tables db pour être lues par Forest
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('ratings', {

    intervention_id:{
      type: DataTypes.INTEGER
    },
    genius_punctuality_grade:{
      type: DataTypes.INTEGER
    },
    genius_intervention_grade:{
      type: DataTypes.INTEGER
    },
    genius_service_grade:{
      type: DataTypes.INTEGER
    },
    genius_comment_received:{
      type: DataTypes.STRING
    },
    client_grade:{
      type: DataTypes.INTEGER
    },
    client_comment_received:{
      type: DataTypes.STRING
    }

  }, {
    tableName: 'ratings',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
      };

    return Model;
};
