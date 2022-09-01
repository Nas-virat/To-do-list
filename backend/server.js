require('dotenv').config();

const express = require('express');
const cors = require("cors");

const {addToDoList ,getAllToDoList,updateToDoList,deleteToDoList} = require('./controller/todolistController');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {res.json({ message: 'API running' });});

app.get('/all', getAllToDoList);
app.post('/add', addToDoList);
app.put('/update/:id', updateToDoList);
app.delete('/delete/:id', deleteToDoList);

app.listen(PORT,() => console.log(`Server running on port ${PORT}`))