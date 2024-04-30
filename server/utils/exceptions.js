import HttpStatus from 'http-status-codes';

export class ApplicationError extends Error {
    constructor(statusCode, { message, cause, extraInfo }) {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = statusCode;
        this.cause = cause;
        this.extraInfo = extraInfo || {};
    }

    toJSON(includeInternalFields) {
        const json = {
            name: this.name,
            statusCode: this.statusCode,
            message: this.message
        };
        if (includeInternalFields) {
            json.stack = this.stack;
            json.cause = this.cause;
            json.extraInfo = this.extraInfo;
        }
        return json;
    }
}

export class InternalServerError extends ApplicationError {
    constructor(message, info) {
        message = message || 'Something went wrong';
        super(500, { message, extraInfo: info });
    }
}

export class NotFound extends ApplicationError {
    constructor(resourceType, message, info) {
        resourceType = resourceType || 'resource';
        message = message || 'Could not find resource';
        super(HttpStatus.NOT_FOUND, { message, extraInfo: info });
    }
}

export class InvalidParameters extends ApplicationError {
    constructor(message, info) {
        message = message || 'Invalid Parameters';
        super(HttpStatus.BAD_REQUEST, { message, extraInfo: info });
    }
}