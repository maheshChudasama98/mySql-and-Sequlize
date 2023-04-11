const User = require('../Models/User');
const db = require('../Models/index')

const Show = async (req, res) => {
    const Users = db.Users;
    const Roles = db.Roles;
    const Company = db.Company
    const Designation = db.Designation
    const jane = await Users.findAll({
        include :Roles,
        
    });
    res.json(jane)
}

const getUser = async (req, res) => {
    const Users = db.Users;
    const jane = await Users.findAll();
    res.json(jane)
}

const pustUser = async (req, res) => {
    const Users = db.Users;
    const data = req.body;
    const jane = await Users.create(data);
    res.json(jane)
}

const putUser = async (req, res) => {
    const Users = db.Users;
    const fineId = req.params.id
    const data = req.body
    console.log(fineId, "---", data);
    const jane = await Users.update(data, { where: { User_id: fineId } });
    res.send(jane)
}

const deleteUser = async (req, res) => {
    const UsergnUsersation = db.Users;
    const fineId = req.params.id
    const jane = await Users.destroy({ where: { User_id: fineId } });
    res.json(jane)
}

module.exports = {
    getUser,
    pustUser,
    putUser,
    deleteUser,
    Show
}