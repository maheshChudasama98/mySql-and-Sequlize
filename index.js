const express = require('express')
const app = express()
const port = 8080
const userRoute = require('./Routers/UserRoute')
const databaseMysql =  require('./Src/databaseMysql')
databaseMysql.connect();
app.use(express.json())
app.use(userRoute)
app.listen(port, (err) => err == null ? console.log(`Server run on port http://localhost:${port}/ `) : console.log("Server error", err))