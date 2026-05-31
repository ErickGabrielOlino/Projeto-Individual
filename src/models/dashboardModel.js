let database = require("../database/config.js");

function captar(id){
console.log("Acessando o dashboard model..." + " Id: " + id)
return database.comandoSQL(`SELECT * FROM xenogene WHERE fkUsuario = '${id}'`);

};

module.exports = {
    captar
}