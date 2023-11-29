    const path = require('path');
    const express = require('express');
    const app = express();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT);


    //% Middleware
    /* app.get('/', (req, res) => {
        console.log('Richiesta ricevuta');
        res.status(200).send('Risposta inviata\n');
    })
    .get('/', (req, res) => {
        console.log('Richiesta ricevuta');
        res.status(200).send('Risposta inviata\n');
    }); */


    //# next
    /* app.get('/', (req, res, next) => {
        console.log('Richiesta gestita dal primo middleware');
        next();
    })
    .get('/', (req, res) => {
        console.log('Richiesta ricevuta dal secondo middleware');
        res.status(200).send('Seconda risposta\n');
    }); */


    //, Gestione dei middleware
    /* app.get('/', first, second);

    function first(req, res, next) {
        console.log('Richiesta gestita dal primo middleware');
        next();
    }

    function second(req, res) {
        console.log('Richiesta ricevuta dal secondo middleware');
        res.status(200).send('Seconda risposta\n');
    } */


    //% Morgan
    /* const morgan = require('morgan');
    //app.use(morgan('common'));
    //app.use(morgan('tiny'));
    app.use(morgan('dev'));

    app.get('/', (req, res) => {
        res.send('Richiesta ricevuta');
    }).get('/admin', (req, res) => {
        res.send('Richiesta ricevuta');
    }) */


    //app.use('/admin', morgan('combined'));


    //% Helmet
    /* const helmet = require('helmet');
    app.use(helmet()); */


    //% Middleware di Autenticazione ed Autorizzazione
    const morgan = require('morgan');
    app.use(morgan('dev'));

    app.get('/auth', checkAuthentication, checkAuthorization);
    //app.get('/', (req, res) => res.send('Sei nella homepage'));

    function checkAuthentication(req, res, next) {
        const { user } = req.query;
        const isAuthenticated = user === 'admin' ? true : user === 'staff' ? true : false;
        if (isAuthenticated) {
            req.user = user;
            return next();
        } else {
            //return res.redirect('/'); //# redirect
            return res.status(401).send('Non puoi accedere a questa risorsa');
        }
    }

    function checkAuthorization(req, res, next) {
        const isAdmin = req.user === 'admin' ? true : false;
        if (isAdmin) {
            return res.status(200).sendFile(path.resolve(__dirname, 'Admin', 'dashboard.html'));
        } else {
            return res.status(403).send('Accesso al back office come staff');
        }
    }



    //, Middleware globali
    /* app
    .get('/user/1', checkAuthentication, checkAuthorization, (req, res) => console.log('Risposta: User 1'))
    .get('/user/2', checkAuthentication, checkAuthorization, (req, res) => console.log('Risposta: User 2'))
    .get('/user/3', (req, res) => {console.log('Risposta: User 3'); res.send('sei in user 3')}); */

    //app.use(checkAuthentication, checkAuthorization);

    /* app.get('/user/1', (req, res) => console.log('Risposta: User 1'))
        .get('/user/2', (req, res) => console.log('Risposta: User 2'))
        .get('/user/3', (req, res) => console.log('Risposta: User 3'))
        .get('/no-global-middleware', specificMiddleware);

    function specificMiddleware(req, res) {
        console.log('Middleware attivato solo su questa rotta');
    } */


    //# Middleware su gruppi di rotte
    /* app.use(['/user', '/admin'], checkAuthentication, checkAuthorization)
        .get('/user/:id', (req, res) => res.send('Rotta con middleware'))
        .get('/risorsa', (req, res) => res.send('Ecco la risorsa')); */



    //, Fallback
    /* app.get('*', (req, res) => {
        res.status(404).send('Pagina non trovata');
    });

    app.get('/', (req, res) => {
        res.status(200).send('Homepage');
    }); */



    //% Middleware built-in
    //, Richieste JSON
    /* app.use(express.json());

    app.post('/', (req, res) => {
        console.log(req.body);
        res.send();
    }); */


    //, Richieste testuali
    /* app.use(express.text())
        .post('/', (req, res) => {
        console.log(req.body);
        res.send()}); */


    //, Servire file statici
    //app.use(express.static('public'));
    //app.use(express.static(path.join(__dirname, 'public')));


    //# Cartella virtuale
    //app.use('/assets', express.static(path.join(__dirname, 'public')));
