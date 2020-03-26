const express = require('express');
const app = express();
const cors = require('cors')
const routes = require('./routes');

app.use(cors());
app.use(express.json());
app.use(routes);

/*
* get buscar uma informação  
* post criar uma informação  
* put alterar uma informação  
* delete remover uma informação  
*/

/* type of paraments 
*  Params query paramentros nomeados enviados na rota após "?" (para filtros, paginacao)
*  Params Route parametros utilizados para intentificar recursos. 
*  Request Body  o corpo da requisição utilizado para criar ou alterar recursos.
*/


app.listen(3333);