const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const publicKeyPath = path.join(__dirname, 'public_key.pem');
const privateKeyPath = path.join(__dirname, 'private_key.pem');

const getPublicKey = () => {
    if (!fs.existsSync(publicKeyPath) || !fs.existsSync(privateKeyPath)) {
        const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
            modulusLength: 2048,
        });
        fs.writeFileSync(publicKeyPath, publicKey.export({ type: 'spki', format: 'pem'}));
        fs.writeFileSync(privateKeyPath, privateKey.export({ type: 'pkcs8', format: "pem"}));
    }
    return fs.readFileSync(publicKeyPath, 'utf8');
}

const decryptData = (encryptedData) => {
    const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
    try {
        const buffer = Buffer.from(encryptedData, 'base64');
        const decrypted = crypto.privateDecrypt(
            {
                key: privateKey,
                padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
                oaepHash: 'sha256'
            },
            buffer
        );
        return decrypted.toString('utf8');
    } catch (error) {
        console.error('Decryption failed:', error);
        return null;
    }
}

module.exports = { getPublicKey, decryptData };