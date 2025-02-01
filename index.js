require('dotenv').config()
const express = require('express')
const UserRoutes = require('./src/routes/userRoute')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require("cors");

app.use(express.json())

app.use(cors());
app.use('/User', UserRoutes)
app.use('/Auth', AuthRoutes)
app.use('/Post', AuthRoutes)
app.use('/Comment', AuthRoutes)


app.listen(PORT, () => {
  console.log(`BisaKerja API listening on port ${PORT}`)
})  