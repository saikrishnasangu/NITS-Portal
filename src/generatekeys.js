const crypto = require('crypto');

const generateJWTSecret = () => {
    return crypto.randomBytes(64).toString('hex');
}

const generateAdminKey = () => {
    return crypto.randomBytes(32).toString('hex');
}

console.log("JWT Secret Key:", generateJWTSecret());
console.log("Admin Key:", generateAdminKey());
