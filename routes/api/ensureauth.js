const config = require('../../config.json');
const jwt = require('jwt-simple');
const moment = require('moment');

function ensureAuthenticated(req, res, next) {
    if (!req.header('Authorization')) {
        return res.status(401).send({ message: 'Please make sure your request has an Authorization header' });
    }
    var token = req.header('Authorization');
    var payload = null;
    try {
        payload = jwt.decode(token, config.tokenSecret);
    }
    catch (err) {
        return res.status(401).send({ message: err.message });
    }
    if (payload.exp <= moment().unix()) {
        return res.status(401).send({ message: 'Token has expired' });
    }
    req.user = payload.sub;
    next();
}

module.exports = {ensureAuthenticated:ensureAuthenticated};