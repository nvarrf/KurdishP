require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());
const userRouter = require('./routes/user.route.js')
const boardRouter = require('./routes/board.route.js')
const pinRouter = require('./routes/pin.route.js')
const commentRouter = require('./routes/comment.route.js')


app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/pins', pinRouter);
app.use('/comments', commentRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});