const path = require('path');

function isAuth(req, res, next) {
    const { user } = req.query;
    const isAuthenticated = user === 'admin' ? true : user === 'staff' ? true : false;
    if (isAuthenticated) {
        req.user = user;
        return next();
    } else {
        return res.state(302).redirect('/');
    }
}

function permissions(req, res, next) {
    const isAdmin = req.user === 'admin' ? true : false;
    if (isAdmin) {
        return res.sendFile(path.resolve('Admin', 'dashboard.html'));
    } else {
        return res.status(403).send('Accesso al back office come staff');
    }
}

module.exports = {isAuth, permissions};