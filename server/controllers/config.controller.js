
export async function getConfig(req, res) {
    // Get session for cookie (if exists)
    if (!req.session){
        return res.json({
            loggedin: false
        });
    }
    // Check session cookie is not expired
    
    return {};
}