import moment from "moment";

export async function isLoggedIn(req, res, next) {
    try {
        if (!req.session.details) {
            return res.json('Not logged in');
        }
        if (req.session.details.expiry < moment().subtract(30, 'days')) {
            return res.json('Not logged in');
        }
        next();
    } catch (error) {
        console.log(error.message)
        return res.json('Define error message');
    }
    
}

export async function canCreateProject(req, res, next) {
    next();
}