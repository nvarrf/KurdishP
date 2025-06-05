const User = require('../models/user.model.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const createUserController = async (req, res) => {

    const { username, displayName, email, password } = req.body;

    if (!username || !displayName || !email || !password) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    if (password.length < 8) {
        res.status(400).json({ error: 'Password must be at least 8 characters long' });
        return;
    }

    if (!/[A-Z]/.test(password)) {
        res.status(400).json({ error: 'Password must contain at least one uppercase letter' });
        return;
    }

    if (!/[a-z]/.test(password)) {
        res.status(400).json({ error: 'Password must contain at least one lowercase letter' });
        return;
    }

    if (!/[0-9]/.test(password)) {
        res.status(400).json({ error: 'Password must contain at least one number' });
        return;
    }

    if (!/[!@#$%^&*]/.test(password)) {
        res.status(400).json({ error: 'Password must contain at least one special character' });
        return;
    }

    if (!email.includes('@')) {
        res.status(400).json({ error: 'Invalid email' });
        return;
    }

    if (username.length < 3) {
        res.status(400).json({ error: 'Username must be at least 3 characters long' });
        return;
    }

    if (username.length > 15) {
        res.status(400).json({ error: 'Username must be at most 15 characters long' });
        return;
    }

    const existingUsername = await User.findOne({ username: username });
    const existingEmail = await User.findOne({ email: email });

    if (!username.match(/^[a-zA-Z0-9]+$/)) {
        res.status(400).json({ error: 'Username must contain only letters and numbers' });
        return;
    }

    if (existingUsername || existingEmail) {
        res.status(409).json({ error: 'There is an account with the provided email or username' });
        return;
    }


    const hashedPassword = await bcrypt.hashSync(password, 10);
    const user = await User.create({
        name: displayName,
        username: username,
        email: email,
        hashPass: hashedPassword
    });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '3h' });

    res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 30 * 24 * 60 * 60,
    });

    const { hashPass, ...userWithoutPassword } = user.toObject();
    return res.status(201).json(userWithoutPassword);
}

const loginUserController = async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    const user = await User.findOne({ email: email })

    if (!user) {
        res.status(401).json({ error: 'Invalid email or password' });
        return;
    }

    const passwordMatch = await bcrypt.compare(password, user.hashPass);

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token, {

        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 30 * 24 * 60 * 60,
    });

    if (!passwordMatch) {
        res.status(401).json({ error: 'Invalid email or password' });
        return;
    }

    const { hashPass, ...userWithoutPassword } = user.toObject();

    return res.status(200).json(userWithoutPassword);
}

const getUserController = async (req, res) => {
    const { username } = req.params;


    const user = await User.findOne({ username });
    const { hashPass, ...userWithoutPassword } = user.toObject();

    return res.status(200).json(userWithoutPassword);



}


const logoutUserController = async (req, res) => {

    res.clearCookie('token');
    res.json({ message: 'Logout successful' });
}

module.exports = { createUserController, loginUserController, getUserController, logoutUserController };

