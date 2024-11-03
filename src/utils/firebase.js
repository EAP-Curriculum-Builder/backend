const firebaseAdmin = require('firebase-admin');
require('dotenv').config();

const serviceAccountKey = JSON.parse(
    Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_KEY, 'base64').toString('utf-8')
);

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccountKey),
});

module.exports = firebaseAdmin;