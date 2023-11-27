    const express = require('express'), app = express(), morgan = require('morgan'),
        path = require('path'), fs = require('fs'), helmet = require('helmet'),
        PORT = process.env.PORT || 3000,
        { isAuth, permissions } = require('./middleware/auth')

    app.listen(PORT);
    app.use(morgan('dev'), helmet());

    app.get('/auth', isAuth, permissions);
    app.get('/', (req, res) => res.send('Sei nella homepage'));