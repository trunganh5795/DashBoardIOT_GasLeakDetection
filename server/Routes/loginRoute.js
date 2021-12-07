const { Router } = require('express');
const { db, db_connected } = require('../db/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config/config');
const loginRouter = Router();

loginRouter.post('/', async (req, res, next) => {
    const { usr, pass } = req.body;
    if (!pass || !usr) {
        next({ code: 400, msg: 'Username or Password cannot be empty.' });
    } else {
        //pasword 123456789
        let data = await db_connected.where('email', '==', `${usr}`).limit(1).get();
        if (!data.empty) {
            data.forEach(doc => {
                let { phonelist, role, email, settings, password, name } = doc.data();
                let checkPassword = bcrypt.compareSync(pass, password);
                if (checkPassword) {
                    const token = jwt.sign({
                        email, role, id: doc.id
                    }, SECRET_KEY, { expiresIn: '1d' });
                    res.status(200).send({ token, phonelist, settings, name });
                } else {
                    return next({ code: 401, msg: 'Password was incorrect' })
                }

            });
        } else {
            next({ code: 401, msg: 'Username was incorrect.' });
        }
    }
})
module.exports = {
    loginRouter
}