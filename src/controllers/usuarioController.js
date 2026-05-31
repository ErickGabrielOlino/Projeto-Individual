let usuarioModel = require("../models/usuarioModel");

function cadastrar(req, res) {
    console.log(req.body);
    let nome = req.body.nomeServer;
    let email = req.body.emailServer;
    let senha = req.body.senhaServer;
    usuarioModel.comando(nome, email, senha)
        .then(() => {
            res.status(200).send("Cadastro feito com sucesso!");
        })
        .catch((erro) => {
            console.log(erro)
            res.status(500).send("Erro no servidor");
        })
}

function logar(req, res) {
    console.log(req.body);
    let nome = req.body.nomeServer;
    let senha = req.body.senhaServer;
    console.log("Controller Login:" + nome);
    console.log("Controller Login Senha:" + senha);
    usuarioModel.logar(nome, senha)
        .then((resultados) => {
            console.log("Retorno do banco: " + resultados);
            if (!(resultados.length == 0)){
                res.status(200).send(resultados);
                
            } else {
                res.status(201).send("Usuario ou senha incorretos!");
            }
        
        })
        .catch((erro) => {
            console.log(erro)
            res.status(500).send("Erro no servidor");
        })
}



module.exports = {
    cadastrar,
    logar
}