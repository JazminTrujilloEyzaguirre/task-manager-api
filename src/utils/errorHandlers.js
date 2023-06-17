// Manejador de errores para controladores asíncronos
const asyncErrorHandler = (controller) => {
    return (req, res, next) => {
        controller(req, res, next).catch(next);
    };
};

// Manejador de errores para rutas no encontradas
const notFoundErrorHandler = (req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
};

// Manejador de errores global
const globalErrorHandler = (err, req, res, next) => {
    console.error(err);

    // Determinar el código de estado y el mensaje de error
    let statusCode = 500;
    let errorMessage = 'Ha ocurrido un error en el servidor';

    // Manejo de errores específicos
    if (err.name === 'ValidationError') {
        statusCode = 400;
        errorMessage = err.message;
    } else if (err.name === 'UnauthorizedError') {
        statusCode = 401;
        errorMessage = 'No autorizado';
    }

    // Responder con el código de estado y el mensaje de error
    res.status(statusCode).json({ error: errorMessage });
};

module.exports = {
    asyncErrorHandler,
    notFoundErrorHandler,
    globalErrorHandler,
};
