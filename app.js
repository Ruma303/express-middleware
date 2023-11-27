    const express = require('express'), app = express(), morgan = require('morgan'),
    path = require('path'), fs = require('fs'), helmet = require('helmet'),
    PORT = process.env.PORT || 3000, { isAuth, permissions } = require('./middleware/auth'),

    //# Moduli rotte
    homeRouter = require('./router/home'), userRouter = require('./router/user'),
    contattiRouter = require('./router/contatti'), page404Router = require('./router/404')




        app.listen(PORT);
        app.use(morgan('dev'), helmet());

        app.get('/auth', isAuth, permissions);
