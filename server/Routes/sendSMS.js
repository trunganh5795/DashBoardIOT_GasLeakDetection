const { Router } = require('express');
const { authenticate, authorize } = require('../db/middleware/verify-token');
const sendSMS = Router();
const client = require('twilio')('', '');
const { db, db_connected } = require('../db/database');
sendSMS.get('/', authenticate, authorize("user"), async (req, res, next) => {
    let docID = req.decodeToken.id;
    const doc = db_connected.doc(docID)
    const result = await doc.get();
    if (!result.exists) {
        console.log("not found")
        next({ code: 404, msg: 'Phone number not found !' })
    } else {
        let previousTime = result.data().lastsend;
        let currentTime = new Date().getTime();
        console.log((currentTime - previousTime) / 3600000);
        if ((currentTime - previousTime) / 3600000 >= 1) {
            client.messages.create({
                body: 'Gas leak detected !',
                from: '+12078172392',
                to: '+12099216581'
            }).then(messages => {
                console.log("messages: ", messages);
                doc.update({lastsend: new Date().getTime()})
                res.status(200).send("ok");
            }).catch(error => res.status(400).send(error))
        }else{
            console.log("has been sent");
            let updateLastSend = new Date().getTime();
            console.log("updateLastSend: ", updateLastSend);
            doc.update({lastsend: updateLastSend})
            res.status(200).send("Message has been sent");
        }
    }


})
module.exports = {
    sendSMS
}