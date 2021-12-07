const { Router } = require('express');
const { db_connected } = require('../db/database');
const { authenticate, authorize } = require('../db/middleware/verify-token');
const { FieldValue } = require('@google-cloud/firestore');
const phoneListRoute = Router();
phoneListRoute.get('/', authenticate, authorize("user"), async (req, res) => {
    let data = await db_connected.where('email', '==', `${req.decodeToken.email}`).limit(1).get();
    if (!data.empty) {
        data.forEach(doc => {
            let { phonelist } = doc.data();
            res.status(200).send(phonelist);
        })
    } else {
        next({ code: 500 })
    }
})
phoneListRoute.post('/', authenticate, authorize("user"), async (req, res, next) => {
    let { name, phone } = req.body;
    let docID = req.decodeToken.id;
    console.log(name, phone);
    const doc = db_connected.doc(docID)
    try {
        if (name === "" || phone === "") {
            next({ code: 400, msg: "bad request" })
        } else {
            const result = await doc.get();
            console.log(result.data().phonelist.length);
            await doc.update({ phonelist: FieldValue.arrayUnion({ id: result.data().phonelist.length + 1, name, phone: "+" + phone, created: new Date().getTime(), status: 'active' }) })
            res.status(200).send(result.data());
        }
    } catch (error) {
        next(error)
    }


})
module.exports = {
    phoneListRoute
}