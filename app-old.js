/** Uso y configuración de Express
    Servir contenido estático
    Template engines
    Handebars
        Helpers
        Parciales
        Variables
    Despliegues en Heroku y Github
    Hacer carpetas públicas en la web */

/**Instalaciones */
/** nmp init */

/**Se  va usar las librerias propias de node js */
/** este ejemplo es basico para entender como crear un servidor web e inicializarlo*/
/**const http = require("http");
*/
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    let resJson = {
      nombre: "Brian",
      edad: 30,
      url: req.url
    };
    res.write(JSON.stringify(resJson));
    res.end();
  })
  .listen(8081);

console.log("Escuchando el puerto 8081");



