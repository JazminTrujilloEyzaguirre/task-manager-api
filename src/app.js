const express = require('express');
const app = express();

// middleware
app.use(express.json());

// Rutas
const userRoutes = require('./routes/usersRoutes');
const taskRoutes = require('./routes/tasksRoutes');
const stateRoutes = require('./routes/stateRoutes');

app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);
app.use('/state', stateRoutes);


// Manejador de errores
const { notFoundErrorHandler, globalErrorHandler } = require('./utils/errorHandlers');
app.use(notFoundErrorHandler);
app.use(globalErrorHandler);

module.exports = app;