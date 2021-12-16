//custom middleware
function requiresLogin(req, res, next) {
    if (req.session["User"]) {
        return next()
    } else {
        res.redirect('/login')
    }
}

function requiresAdmin(req, res, next) {
    if (req.session["admin"]) {
        return next()
    } else {
        res.redirect('/login')
    }
}

module.exports = { requiresLogin, requiresAdmin }