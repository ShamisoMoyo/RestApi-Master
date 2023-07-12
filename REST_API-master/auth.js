// const express = require('express');
// const router = express.Router();

// const tasks = require('./tasks');

// const users = [
//     {id : 1,username: 'user1', password: 'pass1'},

//     {id : 2, username: 'user2', password: 'pass2'}
// ];



// router.post('/login', (req,res)  => {
// const {username, password} = req.body;

// const user = user.find(u => u.username ===username && u.password === password);

// if(user) {
//     req.session.user = user;
//     res.json({message: 'Login Successful'});
// } else {
//     res.status(401).json({message: 'Invalid credentials'});
// }


// });

// router.get('/protected', (req, res)  => {

//     if (req.session.user) {
//         res.send('You are authenticated!');
//     } else {
//         res.status(401).send('Unauthorized');
//     }

// });


// router.post('/logout' , (req, res)  => {


//         req.session.destroy();
//         res.json({ message: 'Logged out successfully' });

// });

// module.exports = router;