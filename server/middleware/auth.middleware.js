
export async function isLoggedIn(req, res, next) {
    try {
        console.log(req.session);
        next();
    } catch (error) {
        console.log(error.message)
        return res.json('Define error message');
    }
    
}