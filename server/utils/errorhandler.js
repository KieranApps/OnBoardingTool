import { ApplicationError, NotFound, InternalServerError, InvalidParameters } from './exceptions.js';

export async function errorHandler(err, req, res, _next) {
    const applicationError = (
        err instanceof ApplicationError ? err : new InternalServerError(err, err)
    );

    if (applicationError.statusCode >= 500) {
        console.error(applicationError.toJSON(true));
    }

    // const internalServerError = process.env.NODE_ENV === 'development';
    res.status(applicationError.statusCode).json(applicationError.toJSON(true));
}