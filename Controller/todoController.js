
const todos = require('../Models/todoModel');
const projects = require('../Models/projectModel');

exports.addTodos = async (req, res) => {
    console.log("Inside addTodos function");
    console.log(req.payload);
    console.log(req.body);

    const { todoa, desa, sta, todob, desb, stb, todoc, desc, stc, todod, desd, std } = req.body;
    const userId = req.payload;
    const { pid } = req.params; // Get pid from params

    try {
        // Validate project
        const project = await projects.findOne({ _id: pid, userId });
        if (!project) {
            return res.status(404).json("Project not found or you do not have permission to add todos to this project");
        }

        // Create new todo
        const newTodos = new todos({
            todoa, desa, sta, todob, desb, stb, todoc, desc, stc, todod, desd, std, userId, projectId: pid
        });

        await newTodos.save();
        res.status(200).json(newTodos);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error', details: err });
    }
};

// get todo
exports.getTodos = async (req, res) => {
    console.log("Inside getTodos function");
    console.log(req.payload);

    const userId = req.payload;
    const { pid } = req.params;

    try {
        // Validate project
        const project = await projects.findOne({ _id: pid, userId });
        if (!project) {
            return res.status(404).json("Project not found or you do not have permission to view todos of this project");
        }

        // Fetch todos associated with the project
        const projectTodos = await todos.find({ projectId: pid, userId });

        res.status(200).json(projectTodos);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error', details: err });
    }
};
// remove todo

exports.removeTodo = async (req, res) => {
    try {
        const { projectId, todoId } = req.params; // Ensure these match the route
        const todo = await Todo.findOneAndDelete({ _id: todoId, projectId: projectId });

        if (todo) {
            res.status(200).json({ message: "Todo deleted successfully" });
        } else {
            res.status(404).json({ message: "Todo not found" });
        }
    } catch (error) {
        console.error("Error deleting todo:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


