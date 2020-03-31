/**Express es un servidor web */
/**Ahora en esta seccion vamos a crear nuestro servidor web pero Usando una dependencia de tercero 
 * que facilita su creación y mantenimiento
 * brinda herramientas indispensable para el manejo de una forma más facil como es EXPRESS
 *  */

/**Instalaciones 
 *  npm install express --save
 *  npm install hbs    permite manejar VIEWS y renderizar  se necesita instalar hbs y configurar
 *  npm install bootstrap
 *  npm install jquery
 *  npm i @popperjs/core
*/


/**Instancia el paquete del servidor */
const express = require('express')
const app = express()
/** Este comando para buscar el puerto rocess.env.PORT solo nos sirve en el momento de desplegar la aplicacion
 * en Heroku un servicio gratuito para subir nuestra aplicacion node
 *  Pasos para desplegar aplicacion
 *  1- crear la constante del puerto y en el packege.json insertar la instruccion de start para el despliege de nuestro servidor
 *  2- crear una cuenta en heroku 
 *  3- crear nueva aplicacion en heroku, una ves creado muestra una serie pasos que se deben segir para subir nuestro proyecto.
 */
const port= process.env.PORT || 3000 ;
/**Permite especificar la carpeta publica que tendrán acceso todos los usuarios */
app.use(express.static(__dirname+'/public'));
/**Express HBS config*/
const hbs = require('hbs')
/**resgistramos las parciales de mis views - vistas  como son el nav, footer, head */
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine','hbs');

/**Helpers
 * permite guardar funciones que pueden ser utilizadas de forma global
 * los helpers se encuentran en el directorio requerido
 */
require('./hbs/helpers')


/**Bootstrap */
// Bootstrap 4 y librerías necesarias
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/@popperjs/core/dist/umd'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/mycss', express.static(__dirname + '/public/assets/css'));
/**Permite capturar las peticiones según el path especificado */
app.get('/', function (req, res) {

    let dataView = {
        nombre: "Brian",
        anio: new Date().getFullYear(),
        url: req.url,
        TituloPage:'Home'
    };
    let nombre='Brian Montenegro';
      res.render('home',dataView);
})

app.get('/acerca', function (req, res) {

    let dataView = {
        nombre: "Brian",
        anio: new Date().getFullYear(),
        url: req.url,
        TituloPage:'Home'
    };
    let nombre='Brian Montenegro';
      res.render('acerca',dataView);
})
 
app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
})