    const express = require('express');
    const router = express.Router();
    router.get('/', (req, res) => res.send('Sei nella homepage'));
    module.exports = router;

