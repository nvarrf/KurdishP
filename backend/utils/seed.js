const User = require('../models/user.model.js');
const Board = require('../models/board.model.js');
const Pin = require('../models/pin.model.js');
const Comment = require('../models/comment.model.js');
const bcrypt = require('bcryptjs');
const connectDB = require('./connectDB.js');

connectDB();

const seedDB = async () => {
    await User.deleteMany({});
    await Pin.deleteMany({});
    await Board.deleteMany({});
    await Comment.deleteMany({});

    const users = [];
    for (let i = 1; i <= 10; i++) {
        const hashedPassword = await bcrypt.hash("password123", 10);
        const user = new User({
            name: `User ${i}`,
            username: `user${i}`,
            email: `user${i}@example.com`,
            hashPass: hashedPassword,
            img: `https://picsum.photos/id/${i}/200/200`,
        });
        users.push(await user.save());
    }

    const boards = [];
    for (const user of users) {
        for (let i = 1; i <= 10; i++) {
            const board = new Board({
                title: `Board ${i} of ${user.username}`,
                user: user._id,
            });
            boards.push(await board.save());
        }
    }

    const pins = [];
    for (const user of users) {
        const userBoards = boards.filter(
            (board) => board.user.toString() === user._id.toString()
        );
        for (let i = 1; i <= 10; i++) {
            const mediaSize = Math.random() < 0.5 ? "800/1200" : "800/600";
            const pin = new Pin({
                media: `https://picsum.photos/id/${i + 10}/${mediaSize}`,
                width: 800,
                height: mediaSize === "800/1200" ? 1200 : 600,
                title: `Pin ${i} by ${user.username}`,
                description: `This is pin ${i} created by ${user.username}`,
                link: `https://example.com/pin${i}`,
                board: userBoards[i - 1]._id,
                tags: [`tag${i}`, "sample", user.username],
                user: user._id,
            });
            pins.push(await pin.save());
        }
    }

    for (const user of users) {
        for (let i = 1; i <= 10; i++) {
            const randomPin = pins[Math.floor(Math.random() * pins.length)];
            const comment = new Comment({
                description: `Comment ${i} by ${user.username}: This is a great pin!`,
                pin: randomPin._id,
                user: user._id,
            });
            await comment.save();
        }
    }

    console.log("Database seeded successfully!");
    process.exit(0);
};

seedDB().catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
});






// const User = require('../models/user.model.js');
// const Board = require('../models/board.model.js');
// const Pin = require('../models/pin.model.js');
// const Comment = require('../models/comment.model.js');
// const bcrypt = require('bcryptjs');
// const connectDB = require('./connectDB.js');


// connectDB();

// const seedUsers = async () => {

//     await User.deleteMany({});
//     await Board.deleteMany({});
//     await Pin.deleteMany({});
//     await Comment.deleteMany({});




//     const users = [];

//     for (let i = 1; i < 10; i++) {

//         const hashedPassword = await bcrypt.hashSync(`password69`, 10);
//         User.create({

//             name: `User ${i}`,
//             username: `user${i}`,
//             email: `user${i}@gmail.com`,
//             hashPass: hashedPassword,
//             img: `https://picsum.photos/id/${i}/200/300`

//         }).then(user => {
//             users.push(user.save());
//         });
//     }
//     console.log(users);
//     const boards = [];

//     for (const user in users) {


//         Board.create({

//             title: `Board ${i} of User :  ${user.username}`,
//             description: `Board ${i} description`,
//             user: user._id

//         }).then(board => {
//             boards.push(board.save());
//         });
//     }
//     console.log(boards);

//     const pins = [];

//     for (const user in users) {
//         const userBoards = boards.filter(board => board.user.toString() === user._id.toString());

//         for (let i = 1; i < 10; i++) {
//             const mediaSize = Math.random() < 0.5 ? '800/1200' : '800/600';
//             Pin.create({
//                 title: `Pin ${i} of User :  ${user.username}`,
//                 description: `Pin ${i} description`,
//                 media: `https://picsum.photos/id/${i + 10}/${mediaSize}`,
//                 width: mediaSize.split('/')[0],
//                 height: mediaSize.split('/')[1],
//                 user: user._id,
//                 board: userBoards[Math.floor(Math.random() * userBoards.length)]._id
//                 ,
//                 link: `URL_ADDRESSicsum.photos/id/${i + 20}/${mediaSize}`,
//                 tags: [`Tag ${i}`, `Tag ${i + 1}`, user.username]

//             }).then(pin => {
//                 pins.push(pin.save());
//             })


//         }
//     }
//     console.log(pins);
//     for (const user in users) {
//         for (let i = 1; i < 10; i++) {

//             const randomPin = pins[Math.floor(Math.random() * pins.length)];
//             Comment.create({
//                 description: `Comment ${i} of User :  ${user.username}`,
//                 user: user._id,
//                 pin: randomPin._id,
//             }).then(comment => {
//                 console.log(comment);
//                 comment.save();

//             })


//         };
//     }

//     console.log("Database Seeded Successfully!");
//     process.exit(0);

// }

// seedUsers().catch(err => {
//     console.log(err);
//     process.exit(1);
// });





