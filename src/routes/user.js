// CREAMOS EL ROUTER
const express = require('express')
const userSchema = require('../models/user')

const router = express.Router()

// create user
router.post('/users', (req, res) => {
    userSchema.addUser(req, res);
})

router.get('/single', (req, res) => {
    res.render('single.ejs')
})
// get single user
/* router.get('/users/:id', (req, res) => {
    const {id} = req.params;
    userSchema.findById(id)    
    .then((data) => res.json(data) )
    .catch((e) => res.json({message: e}))
}) */

// update user
/* router.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const {name, age, email} = req.body 
    userSchema.updateOne({_id: id}, {$set: {name, age, email}})    
    .then((data) => res.json(data) )
    .catch((e) => res.json({message: e}))
}) */

//  delete user
router.get('/users/:id', (req, res) => {
    const {id} = req.params
    userSchema.deleteUser(userSchema.User, id, res)
})

module.exports = router;
