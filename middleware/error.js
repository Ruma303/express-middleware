    module.exports = function errors(err, req, res, next) {
        res.status(500).send(err.message);
    }
    /* const path = require('path');
    const CustomErrorHandler = require(path.resolve('helper', 'CustomErrorHandler'));
    module.exports = function errors(err, req, res, next) {
        if (err instanceof CustomErrorHandler) {
            res.status(err.status).send(err.message);
        } else {
            res.status(500).send('Si è verificato un errore!');
        }
    }*/
