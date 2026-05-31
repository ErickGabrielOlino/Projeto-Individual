let database = require("../database/config.js");

function comando(nome, email, senha){
console.log("Acessando o usario model...")
return database.comandoSQL(`INSERT into usuario VALUES (default,"${nome}","${email}","${senha}")`);

};

function logar(nome, senha){
console.log("Acessando o usario model..." + " Nome: " + nome + " Senha: " + senha)
return database.comandoSQL(`SELECT * FROM usuario WHERE nome = '${nome}' AND senha = '${senha}'`);

};

module.exports = {
    comando,
    logar
}