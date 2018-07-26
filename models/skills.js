'use strict';
//Mapping des tables db pour être lues par Forest
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('skills', {

    user_id:{
      type: DataTypes.INTEGER
    },
    skill_id:{
      type:DataTypes.INTEGER
    },
    skill_description:{
      type:DataTypes.STRING
    },
    level:{
      type:DataTypes.INTEGER
    },
    verified:{
      type:DataTypes.BOOLEAN
    }

  }, {
    tableName: 'skills',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {

    };

    return Model;
};
