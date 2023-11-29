    const express = require('express');
    const router = express.Router();

    module.exports = router.get('*', (req, res) => {
        res.status(404).send('pagina 404');
    });

