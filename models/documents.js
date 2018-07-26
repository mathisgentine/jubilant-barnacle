'use strict';
//Mapping des tables db pour être lues par Forest
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('documents', {

    user_id:{
      type: DataTypes.INTEGER
    },
    document_type:{
      type: DataTypes.STRING
    },
    document_link:{
      type: DataTypes.STRING
    }
  }, {
    tableName: 'documents',
    underscored: true,
    timestamps: true,
    schema: process.env.DATABASE_SCHEMA,
  });

  Model.associate = (models) => {
      };

    return Model;
};
