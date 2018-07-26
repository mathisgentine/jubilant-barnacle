'use strict';
//Mapping des tables db pour être lues par Forest
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('matching_matrice', {

    issue_id:{
      type: DataTypes.INTEGER
    },
    issue_description:{
      type: DataTypes.STRING
    },
    skill_id:{
      type: DataTypes.INTEGER
    },
    skill_description:{
      type: DataTypes.STRING
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
