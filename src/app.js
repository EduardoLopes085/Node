// IMPORTANDO O EXPRESS
const express = require('express')
// APP RECEBE O EXPRESS
const app = express()
//APP RECEBE MIDDLEWARE PARA INTERPRETAR JSON
app.use(express.json())
const animeRoutes = require('./routes/routes')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(animeRoutes)

app.use(authRoutes)

app.use(userRoutes)




module.exports = app;