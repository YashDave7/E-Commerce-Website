const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    try {
        const saltRounds = 10;
        passwordInString = password.toString();
        const hashedPassword = await bcrypt.hash(passwordInString, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log("error in hashing the password");
        console.log(error);
    }
}

const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashPassword);
}

module.exports = hashPassword;
module.exports = comparePassword;