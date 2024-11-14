// IMPORTANDO O EXPRESS
const express = require('express')
// APP RECEBE O EXPRESS
const app = express()
//APP RECEBE MIDDLEWARE PARA INTERPRETAR JSON
app.use(express.json())
// const animeRoutes = require('./routes/routes')
// const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

// app.use(animeRoutes)

// app.use(authRoutes)

app.use(userRoutes)
app.use(productRoutes)
app.use(categoryRoutes)




module.exports = app;