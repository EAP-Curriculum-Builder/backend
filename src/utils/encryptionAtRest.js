const crypto = require('crypto');

const algorithm = 'aes-256-cbc';

const restEncryption = (text, key) => {
    const newKey = Buffer.from(key, 'hex');
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, newKey, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const ivHex = iv.toString('hex');
    return ivHex + ':' + encrypted;
}

const restDecryption = (encryptedText, key) => {
    if (typeof encryptedText !== 'string') {
        throw new Error('encryptedText must be a string');
    }

    const parts = encryptedText.split(':');
    console.log(parts);
    if (parts.length !== 2) {
        throw new Error('Encrypted text is not in the correct format');
    }

    const [ivHex, encrypted] = parts;

    const newKey = Buffer.from(key, 'hex');
    const ivBuffer = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, newKey, ivBuffer);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

module.exports = {
    restEncryption,
    restDecryption
}