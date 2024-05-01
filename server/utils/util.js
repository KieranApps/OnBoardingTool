import bcrypt from 'bcrypt';
import crypto from 'node:crypto';

export function asyncRequest(handler) {
    return async function(req, res, next){
        try {
            const result = await handler(req, res);
            if(!res.headersSent){
                return res.status(200).send(result);
            }
            return next();
        } catch (error) {
            return next(error, req, res, next);
        }
    }
};

export async function hashPassword(raw){
    const saltRounds = 12;
    const hash = await bcrypt.hash(raw, saltRounds).then((hash) => {
        return hash;
    }).catch((err) =>{
        return false;
    });
    return hash;
};

export function validate(value, schema){
    const validation = schema.validate(value);
    if (validation.error) {
        throw new InvalidParameters(validation.error);
    }
    return validation.value;
};

export function createUUID() {
    let rnd = crypto.randomBytes(16);
    rnd[6] = (rnd[6] & 0x0f) | 0x40;
    rnd[8] = (rnd[8] & 0x3f) | 0x80;
    rnd = rnd.toString('hex').match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);
    rnd.shift();
    return rnd.join('-');
}