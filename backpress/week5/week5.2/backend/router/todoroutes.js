const express = require('express');
const { Todo } = require('../databse/db');
const { checkUser } = require('../middleware/usermiddleware')
const router = express.Router();

router.post('/createtodo', checkUser, async (req, res) => {
    try {
        const { title, descreption } = req.body;

        const newtodo = await Todo.create({
            title: title,
            descreption: descreption
        });

        console.log(newtodo);
        res.status(201).json({
            message: "Todo created",
            todo: newtodo
        });
    } catch (error) {
        console.error("Error creating todo:", error);
        res.status(500).json({
            message: "Error creating todo",
            error: error.message
        });
    }
});
router.get('/alltodos', checkUser, async (req, res) => {
    const todos = await Todo.find({});
    console.log(todos);
    res.status(201).json({
        msg: "fetched all the todos succesfully"
    })
});

router.put('/updatetodo', async (req, res) => {
    await Todo.update({
        _id: req.body._id
    }, {
        completed: true
    });
    res.json({
        msg:"todo is updated succesfully"
    })
})

module.exports = { router };




