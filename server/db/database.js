// const firebaseAdmin = require('firebase-admin')
const { firebaseConfig } = require('../config/config')
// const db = firebaseAdmin.initializeApp(firebaseConfig)
const serviceaccountkey = require('../config/serviceaccountkey.json')


const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// const serviceAccount = require('./path/to/serviceAccountKey.json');

initializeApp({
  credential: cert(serviceaccountkey)
});

const db = getFirestore();
const db_connected = db.collection('user');
module.exports = { db_connected }