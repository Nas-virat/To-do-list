const pool = require("../config/db");

const addToDoList = (req,res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }

        const topic = req.body.Topic;
        const description = req.body.Description;

        connection.query(`INSERT INTO task (Topic, Description) VALUES (?,?)`, 
        [topic, description], (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`insert task ${topic}, ${description}`);
    });
}


const getAllToDoList = (req,res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }

        connection.query(`SELECT * FROM task`, 
        (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
            console.log(result);
        });
    });
}


const updateToDoList = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        } 

        const topic = req.body.Topic;
        const description = req.body.Description;

        connection.query("UPDATE task SET Topic = ?, Description = ? WHERE ID = ? ",
        [topic, description, req.params.id], (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`UPDATE task ID ${req.params.id} Name: ${topic} Description: ${description}`);
   });
};


const deleteToDoList = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            console.log(err);
            res.status(500).json({'error':err});
            return;
        }
        connection.query("DELETE FROM task WHERE ID = ?",
        [req.params.id], (err, result) => {
            connection.release();
            if (err) {
                console.log(err);
            }
            res.send(result);
        });
        console.log(`delete task ID ${req.params.id}`);
    });
}


module.exports = {addToDoList ,getAllToDoList,updateToDoList,deleteToDoList};