const express = require('express');
//creo la instancia de mi servidor, en la constante app tengo todo lo de mi servidor
const app = express();
//ahora le digo a mi constante que escuche indicandole el puerto y que cuando inicie me de un mensaje
app.listen(2800, () => console.log('Server on port 2800'));