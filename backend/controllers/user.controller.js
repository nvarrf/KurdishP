const User = require('../models/user.model.js');
const bcrypt = require('bcryptjs');

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

    // Remove this line - don't send response here
    // res.json({ message: 'User created successfully' });
    console.log(req.body);

    const hashedPassword = await bcrypt.hashSync(password, 10);

    await User.create({
        name: displayName,
        username: username,
        email: email,
        hashPass: hashedPassword
    })
        .then(user => {
            res.status(201).json({ message: 'User created successfully', user: user });
            console.log(user);
        })
        .catch(err => {
            res.status(400).json({ error: err.message });
        });

}

const loginUserController = async (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
    }

    await User.findOne({ username: username })
        .then(user => {
            if (!user) {
                res.status(401).json({ error: 'Invalid username or password' });
                return;
            }
            const isPasswordValid = bcrypt.compareSync(password, user.hashPass);
        })
}

const getUserController = async (req, res) => {
    const { username } = req.params;


    const user = await User.findOne({ username });
    const { hashPass, ...userWithoutPassword } = user.toObject();

    return res.status(200).json(userWithoutPassword);



}


module.exports = { createUserController, loginUserController, getUserController };

