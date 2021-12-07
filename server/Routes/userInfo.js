const { Router } = require('express');
const { db, db_connected } = require('../db/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const { SECRET_KEY } = require('../config/config');
const { authorize, authenticate } = require('../db/middleware/verify-token');
const userInfoRouter = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './img/profile')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random())
        cb(null, uniqueSuffix + file.originalname)
    }
})
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        const pattern = ['image/jpeg', 'image/png']
        if (!pattern.includes(file.mimetype)) {
            return cb(new Error('I don\'t have a clue!'));
        }
        console.log(file);
        cb(null, true);
    }

}).single('file')

userInfoRouter.get('/', authenticate, authorize("user"), async (req, res,next) => {
    let data = await db_connected.where('email', '==', `${req.decodeToken.email}`).limit(1).get();
    if (!data.empty) {
        data.forEach(doc => {
            let { email, phone, name, address, img } = doc.data();
            res.status(200).send({ email, phone, name, address, img });
        })
    } else {
        next({ code: 500 })
    }

})
userInfoRouter.put('/', authenticate, authorize("user"), upload, async (req, res, next) => {
    let docID = req.decodeToken.id;
    let { email, name, address, phone } = JSON.parse(req.body.data);
    try {
        if(req.file){
            await db_connected.doc(docID).update({
                email:req.decodeToken.email, name, address, phone, img: 'http://localhost:7000/public/profile/' + req.file.filename
            });
        }else{
            await db_connected.doc(docID).update({
                email, name, address, phone
            });
        }
        res.status(200).send("success");
    } catch (error) {
        next(error);
    }



})
module.exports = {
    userInfoRouter
}