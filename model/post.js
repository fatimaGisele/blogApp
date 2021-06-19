const { Model, DataTypes } = require('sequelize');
const {sequelize} = require('../database/db');

class Post extends Model {}
Post.init({ 
  PostID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false  
  },
  contents: {
    type: DataTypes.STRING,
    allowNull: false
  },
  img:{
    type: DataTypes.STRING,
    allowNull: false
  },
  category:{
    type: DataTypes.STRING,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, { sequelize, modelName: 'Post' });



module.exports = {Post}