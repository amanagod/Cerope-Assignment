

export class AppError extends Error {
    constructor(message, statusCode = 400,isOperational) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = isOperational || true;
    }
}

export class UserExistsError extends AppError {
    constructor(){
        super("User already exists with this email",409,'CONFLICT')
    }
}

export class UserDontExistsError extends AppError {
    constructor(){
        super("User Dont exists with this email",409,'CONFLICT')
    }
}

