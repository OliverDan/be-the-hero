const express = require('express');

const OngController = require('./controllers/Ongcontroller');

const Incidentscontroller = require('./controllers/Incidentscontroller');
const profilecontroller = require('./controllers/profilecontroller');
const sessionscontroller = require('./controllers/sessioncontroller');
const connection = require('./database/connection');

const routes = express.Router();


routes.post('/sessions', sessionscontroller.create);


routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', profilecontroller.index);

routes.get('/incidents', Incidentscontroller.index);
routes.post('/incidents', Incidentscontroller.create);
routes.delete('/incidents/:id', Incidentscontroller.delete);

module.exports = routes;