module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users ', {
        User_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
            autoIncrement: true,
            primaryKey: true
        },
        User_Name: {
            type: DataTypes.STRING(30),
        },
        User_user_name: {

        },
        User_email: {

        },
        User_Password: {},
        User_role_name_Fk: {
            type: DataTypes.INTEGER,
        },
        User_desi_name_fk: {
            type: DataTypes.INTEGER,
        },
        User_com_name_fk: {
            type: DataTypes.INTEGER,

        }
    }, {
        modelName: 'Users ',
        initialAutoIncrement: 300,
    });

    console.log("Users Table -", Users === sequelize.models.Users); // true
    return Users
} 