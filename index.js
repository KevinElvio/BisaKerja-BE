require('dotenv').config()
const express = require('express')
const UserRoutes = require('./src/routes/UserRoute')
const AuthRoutes = require('./src/routes/AuthRoutes')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require("cors");

app.use(express.json())

app.use(cors());
app.use('/user', UserRoutes)
app.use('/auth', AuthRoutes)
// app.use('/post', PostRoutes)
// app.use('/comment', CommentRoutes)
// app.use('/job', JobRoutes)


app.listen(PORT, () => {
  console.log(`BisaKerja API listening on port ${PORT}`)
})  