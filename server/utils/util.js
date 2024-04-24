export function asyncRequest(handler) {
    return async function(req, res, next){
        try {
            const result = await handler(req, res);
            if(!res.headersSent){
                return res.status(200).send(result);
            }
            return next();
        }catch (error) {
            return next(error);
        }
    }
};