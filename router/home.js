    const express = require('express');
    const path = require('path');
    const router = express.Router();
    const CustomErrorHandler = require(path.resolve('helper', 'CustomErrorHandler'));
    router.get('/', (req, res) => {
        throw new Error('Errore generico sollevato');
        return res.send('Sei nella homepage');
        //throw new CustomErrorHandler(404, 'Errore nella richiesta');
    });
    /*. get('/', (req, res, next) => {
        setTimeout(() => {
            try {
                throw new Error('Errore generico sollevato');
            } catch(error) {
                next(error);
                return;
            }
        }, 1);
        res.send('Sei nella homepage');
    }); */
    module.exports = router;

