const express = require('express');
const conectarDB = require('./config/db.js') ;
const cors = require('cors');

//creacion del servidor 
const app = express();

//conección a base de datos mongoDB
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/unidad', require('./routes/unidad'));
app.use('/api/registro', require('./routes/registroRouter'));
app.use('/api/usuario', require('./routes/usuarioRouter'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo correctamente.....')

})
//module.exports = app;