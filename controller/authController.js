const userModel = require('../models/userModel');
const comparePassword = require('../helpers/authHelper');
const hashPassword = require('../helpers/authHelper');
const JWT = require('jsonwebtoken');


// REGISTER CONTROLLER. 
const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;
        // VALIDATIONS.
        if (!name || !email || !password || !phone || !address) {
            return res.status(404).send({ 
                success: false,
                error: 'All the fields are required'
             });
        }


        // CHECK USER.
        const existingUser = await userModel.findOne({ email })
        // EXISTING USER.
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Already registered, Please login'
            })
        }

        // REGISTERING USER.
        const hashedPassword = await hashPassword(password)
        // SAVING USER.
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password: hashedPassword
        }).save()

        res.send({
            success: true,
            message: 'User Registered Successfully',
            user
        })
    } catch (error) {
        console.log(error);
    }
}


// LOGIN CONTROLLER.
const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        // VALIDATION.
        if (!email || !password) {
            return res.status(404).send({ 
                success:false,
                message: 'All the fields are required' 
            });
        }
        // CHECK USER.
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email not registered'
            })
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Invalid Password'
            })
        }
        // CREATING TOKEN.
        const token = await JWT.sign({_id: user._id}, process.env.JWT, {expiresIn:"7d"});
        res.status(200).send({
            success: true,
            message: 'login Successfully',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
            token
        })
    } catch (error) {
        console.log(error);
    }
}

// test controller.
const testController = (req, res) => {
    res.send("protected route with Jwt");
}

module.exports = testController, loginController, registerController;