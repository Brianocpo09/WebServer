/**Express es un servidor web */
/**Ahora en esta seccion vamos a crear nuestro servidor web pero Usando una dependencia de tercero 
 * que facilita su creación y mantenimiento
 * brinda herramientas indispensable para el manejo de una forma más facil como es EXPRESS
 *  */

/**Instalaciones 
 * npm install express --save
 * nom install hbs    permite manejar VIEWS y renderizar  se necesita instalar hbs y configurar
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
hbs.registerPartials(__dirname+'/views/parciales');
app.set('view engine','hbs');
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
 
app.listen(port, ()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
})