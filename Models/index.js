const Sequelize = require("sequelize");
const sequelize = new Sequelize(
   'mydemo',
   'root',
   'yug@1226',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
  );
sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});
