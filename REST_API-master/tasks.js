const express = require('express');
const app = express();
// const authRoutes = require('./auth')
const cors = require('cors');
const mongoose = require('mongoose');

//db objects
const Task = require('./TaskModel');

//dbURI = 'mongodb+srv://evilcorpvsfsociety:1UMTE5TeOn0l2wzv@cluster0.xidkvjr.mongodb.net/';
//mongoose.connect(dbURI)
 //   .then((result) => {
   //     console.log(result)
  //  })
  //  .catch((err) => console.log(err));

const { v4: uuidv4 } = require('uuid');

app.use(express.json());

//app.get('/', (req, res) => {
  //  res.send('Welcome to TASKS!');
//});

let tasks = [
    {
        id: uuidv4(),
        title: 'Task 1',
        description: 'This is task 1',
        status: 'Pending',
    },
    {
        id: uuidv4(),
        title: 'Task 2',
        description: 'This is task 2',
        status: 'Completed',
    }
];

app.use(cors());

app.get('/api/tasks', (req, res) => { //fetches all tasks
    res.json(tasks);
});

app.get('/api/tasks/:id', (req, res) => {
    const tasksId = req.params.id;
    const foundTask = tasks.find((task) => task.id === tasksId);

    if (foundTask) {
        res.json(foundTask);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

app.post('/api/tasks/create', (req, res) => {
    const { title, description, status } = req.body;

    const newTask = {
        id: uuidv4(),
        title: title,
        description: description,
        status: status,
    };

    console.log(newTask);

    tasks.push(newTask);

    res.status(201).json(newTask);
});

app.put('/api/tasks/:id/update', (req, res) => {
    const tasksId = req.params.id;
    const tasksData = req.body;
    const tasksIndex = tasks.findIndex((tasks) => tasks.id === tasksId);

    if (tasksIndex !== -1) {
        tasks[tasksIndex] = {
            ...tasks[tasksIndex],
            ...tasksData,
        };

        res.json(tasks[tasksIndex]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});



app.delete('/api/tasks/:id/delete', (req, res) => {
    const tasksId = req.params.id;
    const tasksIndex = tasks.findIndex((tasks) => tasks.id === tasksId);

    console.log(req);

    if (tasksIndex !== -1) {
        const deletedTasks = tasks.splice(tasksIndex, 1);
        res.json(deletedTasks[0]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

const port = 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});