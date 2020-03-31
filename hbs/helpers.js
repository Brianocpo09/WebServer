/**Helpers
 * permite guardar funciones que pueden ser utilizadas de forma global
 */
const hbs = require('hbs')
hbs.registerHelper('getAnio', ()=>{
    return new Date().getFullYear();
});