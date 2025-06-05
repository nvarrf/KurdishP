require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const mongoDB = require('./utils/connectDB.js');
const userRouter = require('./routes/user.route.js')
const boardRouter = require('./routes/board.route.js')
const pinRouter = require('./routes/pin.route.js')
const commentRouter = require('./routes/comment.route.js')
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(cookieParser());

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/pins', pinRouter);
app.use('/comments', commentRouter);



app.listen(port, () => {

    mongoDB();
    console.log(`Server is running on port ${port}`);
});