const Task = require('../models/Task');

// Obtener todas las tareas
async function getTasks(req, res) {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ha ocurrido un error al obtener las Tareas'})
    }
}

// Crear una tarea
async function createTask(req, res) {
    const { title, description, user_id, state_id } = req.body;
    try {
        const task = await Task.create({ title, description, user_id, state_id });
        res.json(task);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ha ocurrido un error al crear la Tarea'})
    }
}

// Obtener una tarea por ID
async function getTaskById (req, res) {
    const { id } = req.params;
    try {
        const task = await Task.findByPk(id);
        if (task) {
            res.json(task);
        } else {
            res.status(404).json({ message: "Tarea no encontrada."})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ha ocurrido un error al crear la Tarea'})
    }
}

// Actualizar una Tarea
async function updateTask(req, res) {
    const { id } = req.params;
    const { title, description, state_id } = req.body;
    try {
      const task = await Task.findByPk(id);
      if (task) {
        task.title = title;
        task.description = description;
        task.state_id = state_id;
        await task.save();
        res.json(task);
      } else {
        res.status(404).json({ message: 'Tarea no encontrada.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ha ocurrido un error al actualizar la Tarea.' });
    }
}

// Eliminar una empresa
async function deleteTask(req, res) {
    const { id } = req.params;
    try {
      const task = await Task.findByPk(id);
      if (task) {
        await task.destroy();
        res.json({ message: 'Tarea eliminada correctamente.' });
      } else {
        res.status(404).json({ message: 'Tarea no encontrada.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ha ocurrido un error al eliminar la Tarea.' });
    }
}

// Obtener tareas por estado
async function getTasksByState (req, res) {
  const stateId = req.params.stateId;
  try {
      const tasks = await Task.findAll({
        where: {
          state_id: stateId,
        },
      });
      if (tasks) {
          res.json(tasks);
      } else {
          res.status(404).json({ message: "Tarea no encontrada."})
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ha ocurrido un error al obtener las Tareas'})
  }
}

// Obtener tareas por usuario
async function getTasksByUser (req, res) {
  const userId = req.params.userId;
  try {
      const tasks = await Task.findAll({
        where: {
          user_id: userId,
        },
      });
      if (tasks) {
          res.json(tasks);
      } else {
          res.status(404).json({ message: "Tarea no encontrada."})
      }
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Ha ocurrido un error al obtener las Tareas'})
  }
}

module.exports = {
    getTasks,
    createTask,
    getTaskById,
    updateTask,
    deleteTask,
    getTasksByState,
    getTasksByUser
}