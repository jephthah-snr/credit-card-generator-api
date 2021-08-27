const express = require('express');

const {getAllUsers, getUser, addUser, editUser, deleteUser} = require('../controllers/controllers')


const router = express.Router();


router.route('/')
.get(getAllUsers)
.post(addUser)

router.route('/:id')
.get(getUser)
.put(editUser)
.delete(deleteUser)



module.exports = router