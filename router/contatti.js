const express = require('express');
const router = express.Router();

module.exports = router.get('/contatti', (req, res) => res.send('Sei nella pagina contatti'));