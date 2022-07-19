const express = require('express');
require('dotenv').config();
const cors = require('cors');

const {dbConnection} = require('./database/config');

//Crear servidor de express
const app = express();

//Configurar CORS
app.use( cors() );

//Lectura y parseo del Body
app.use( express.json() );

//Base de datos
dbConnection();

//Rutas
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/hospitales', require('./routes/hospitales') );
app.use( '/api/todo', require('./routes/busquedas') );
app.use( '/api/upload', require('./routes/uploads') );
app.use( '/api/medicos', require('./routes/medicos') );
app.use( '/api/login', require('./routes/auth') );



app.listen(process.env.PORT,  () =>{
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});
