// EXPRESS + MONGOOSE
const express = require('express')
const mongoose = require('mongoose')
const userSchema = require('./models/user')
// APP + PORT
const app = express()
const port = process.env.PORT || 9000;   // Define el puerto 9000 o el que nos sirva un servicio de cloud en el caso de subirlo

const dotenv = require('dotenv').config();
const userRoutes = require('./routes/user')

// APP SET
app.set('views', './views')
app.set('view engine', 'ejs')



// APP USE (FORMS + JSON)
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('../public'))

// middleware
app.use('/api', userRoutes );

// routes
app.get('/', async (req, res) => {
    let users = await userSchema.showUsers(userSchema.User)  
    res.render('index.ejs', {users})
});


// mongodb connection
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})   // Le pasamos un string que es la clave de usuario de atlas, obtenida en mongoAtlas
.then(() => console.log('Conectado a MongoDB'))
.catch((e) => console.error(e))

app.listen(port, () => console.log(`Connected on http://localhost:${port}`))  //Conectamos el puerto a través de la variable port