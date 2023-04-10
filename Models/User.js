module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        User_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        User_Name: {
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        User_user_name: {
            type: DataTypes.STRING(30),
        },
        User_email: {
            type: DataTypes.STRING(30),
        },
        User_Password: {
            type: DataTypes.STRING(15),
        },

        User_role_name_fk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },
        User_desi_name_fk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        },
        User_com_name_fk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            
        }
    }, {
        modelName: 'Users',
        initialAutoIncrement: 300,
    });

    console.log("Users Table -", Users === sequelize.models.Users); // true
    return Users
} 