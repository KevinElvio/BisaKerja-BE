require('dotenv').config()
const express = require('express')
const UserRoutes = require('./src/routes/userRoute')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require("cors");

app.use(express.json())

app.use(cors());
app.use('/', UserRoutes)

app.listen(PORT, () => {
  console.log(`BisaKerja API listening on port ${PORT}`)
})  