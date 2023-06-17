const Users = require('../models/User');

// Obtener todas los users
async function getUsers(req, res) {
    try {
        const users = await Users.findAll();
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ha ocurrido un error al obtener los Users'})
    }
}

// Crear un user
async function createUser(req, res) {
    const { username, password } = req.body;
    try {
        const users = await Users.create({ username, password });
        res.json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ha ocurrido un error al crear el User'})
    }
}

// Obtener un user por ID
async function getUserById (req, res) {
    const { id } = req.params;
    try {
        const users = await Users.findByPk(id);
        if (users) {
            res.json(users);
        } else {
            res.status(404).json({ message: "User no encontrado."})
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ha ocurrido un error al crear el User'})
    }
}

// Actualizar un user
async function updateUser(req, res) {
    const { id } = req.params;
    const { username, password } = req.body;
    try {
      const users = await Users.findByPk(id);
      if (users) {
        users.username = username;
        users.password = password;
        await users.save();
        res.json(users);
      } else {
        res.status(404).json({ message: 'User no encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ha ocurrido un error al actualizar el User.' });
    }
}

// Eliminar un user
async function deleteUser(req, res) {
    const { id } = req.params;
    try {
      const users = await Users.findByPk(id);
      if (users) {
        await users.destroy();
        res.json({ message: 'User eliminado correctamente.' });
      } else {
        res.status(404).json({ message: 'User no encontrado.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Ha ocurrido un error al eliminar el User.' });
    }
}

module.exports = {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}