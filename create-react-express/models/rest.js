'use strict';
module.exports = (sequelize, DataTypes) => {
  const rest = sequelize.define('rest', {
    locations: DataTypes.STRING
  }, {});
  rest.associate = function(models) {
    // associations can be defined here
  };
  return rest;
};