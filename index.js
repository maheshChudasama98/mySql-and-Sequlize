const express = require('express')
const app = express()
const port = 8080
const cors = require('cors');
const bodyparser = require('body-parser')

app.use(cors())
app.options('*', cors());  // enable pre-flight
app.use(bodyparser.json());
app.use(express.json())


const userRoute = require('./Routers/UserRoute')

app.use(userRoute)
app.use(express.urlencoded({ extended: true }));
app.listen(port, (err) => err == null ? console.log(`Server run on port http://localhost:${port}/ `) : console.log("Server error", err))