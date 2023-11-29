const express = require('express');
const router = express.Router();

module.exports = router.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Sei nella pagina User ${id}`);
});