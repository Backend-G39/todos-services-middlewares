const express = require('express');
const routerUser = require('./router/user.router');
const { verifyJWT } = require('../utils/verifyJWT');
const routerToDo = require('./router/toDo.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/users', routerUser)
router.use('/todos', verifyJWT, routerToDo)


module.exports = router;