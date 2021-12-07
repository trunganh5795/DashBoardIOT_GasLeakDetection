const { FieldValue } = require('@google-cloud/firestore');
const { Router } = require('express');
const { db, db_connected } = require('../db/database');
const { authenticate, authorize } = require('../db/middleware/verify-token');
const settingRoute = Router();
settingRoute.get('/', async (req, res) => {
    let data = await db_connected.where('email', '==', 'trunganh@gmail.com').limit(1).get()
    if (!data.empty) {
        data.forEach(doc => {
            console.log(doc.id, '=>', doc.data());
            return res.status(200).send(doc.data().email);
        });
    } else {
        res.status(200).send("Fail");
    }
})
// update setting
settingRoute.post('/', authenticate, authorize("user"), async (req, res) => {
    const {buzzervalue,fanmode,fanspeed} = req.body;
    const docID = req.decodeToken.id;
    console.log(buzzervalue,fanmode,fanspeed);
    await db_connected.doc(docID).update({
        'settings.fanmode':fanmode,
        'settings.buzzervalue':buzzervalue,
        'settings.fanspeed':fanspeed,
    })
    res.status(200).send("ok");
})
module.exports = {
    settingRoute
}