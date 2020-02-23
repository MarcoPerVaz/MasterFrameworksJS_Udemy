'user strict'

// Cargar modulos de Node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http)
var app = express();

// Cargar ficheros rutas

// Middlewares
app.use(bodyParser.urlencoded( {extended:false} ));
app.use(bodyParser.json());

// CORS

// Añadir prefijos a rutas
  // Ruta o método de prueba para el API
  app.get('/probando', (req, res) => {
    console.log('Hola desde la ruta /probando');

    // Retorna HTML
      // return res.status(200).send(`
      //   <ul>
      //     <li>NodeJS</li>
      //     <li>Angular</li>
      //     <li>React</li>
      //     <li>Vue</li>
      //   </ul>
      // `);

    // Retorna JSON
      return res.status(200).send({
        curso: 'Master en Frameworks JS',
        author: 'Marco Perdomo',
        url: 'thusoft.com.mx',
      });

  });

  // Ruta /datos-curso
  app.get('/datos-curso', (req, res) => {

    // Retorna JSON
      return res.status(200).send({
        curso: 'Master en Frameworks JS',
        author: 'Marco Perdomo',
        url: 'thusoft.com.mx',
      });

  });


// Exportar el modulo (fichero actual)
module.exports = app;

/* Notas:
    Pasos para crear el servidor de Node:
      1.Cargar modulos de Node para crear el servidor
      2.Ejecutar express (librería http)
      3.Cargar ficheros rutas
      4.Middlewares
      5.CORS
      6.Añadir prefijos a rutas
      7.Exportar el modulo (fichero actual)
    *Esta función anónima (req, res) => {} es igual a escribir function(req, res) {}
*/