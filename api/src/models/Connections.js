const {DataTypes} = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('connections',{
        groupAffiliation:{
            type: DataTypes.STRING,
            allowNull: false
        },
        relatives: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

}