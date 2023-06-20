const mongoose = require('mongoose')

const {Schema} = mongoose

// CREAR EL ESQUEMA PARA NUEVO USUARIO
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type:Number,
        required: false
    },
    email: {
        type: String,
        required:true
    }
});

// DEFINIR EL MODELO PARA NUEVO USUARIO
const User = mongoose.model('User', userSchema)


// AÑADIR USUARIO
const addUser = (req, res) => {
    const {name, age, email} = req.body
    const user = new User({
        name,
        age: Number(age),
        email       
    })
    user.save()
    .then( re => {res.redirect('/')})
}

// MOSTRAR USUARIOS
const showUsers = async (modelo) => {
    try{
        let resultados = await modelo.find({})    
        return resultados
    } catch (e) {
        console.error(e)
    }    
}

// ELIMINAR USUARIO
const deleteUser = (modelo, id, res) => {
    modelo.deleteOne({_id:id})
    .then(re => res.redirect('/')) 
}


/* module.exports = mongoose.model('User', userSchema); */
module.exports = {addUser, showUsers, deleteUser, User}