let database = require("../database/config.js");

function registrar(nome, id,efi,com,arq,dec){
return database.comandoSQL(`insert into xenogene (nome, fkUsuario, eficienciaMetabolica, complexidade, arquitetonico,descricao)VALUES
('${nome}', ${id},'${efi}','${com}',${arq},'${dec}');`);

};

module.exports = {
    registrar
}