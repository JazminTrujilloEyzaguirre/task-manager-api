const State = require('../models/State');

// Obtener todos los estados
async function getState(req, res) {
    try {
        const state = await State.findAll();
        res.json(state);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Ha ocurrido un error al obtener los estados'})
    }
}

module.exports = {
    getState
};