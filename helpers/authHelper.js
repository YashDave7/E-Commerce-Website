const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hashed = bcrypt.hash(password, saltRounds);
        return hashed;
    } catch (error) {
        console.log(password);
        console.log("error in hashing the password");
        console.log(error);
    }
}

const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}

module.exports = comparePassword, hashPassword;