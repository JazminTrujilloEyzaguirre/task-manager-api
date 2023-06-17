const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const State = require('./State');
const Users = require('./User');

const Task = sequelize.define('Tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    state_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    tableName: 'Tasks',
    timestamps: false,
})

Task.belongsTo(Users, { foreignKey: "user_id"});
Task.belongsTo(State, { foreignKey: "state_id"});

module.exports = Task;