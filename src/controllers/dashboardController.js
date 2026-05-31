let dashboardModel = require("../models/dashboardModel");

function captardados(req, res) {
    console.log(req.body);
    let id = req.body.idServer;
    console.log("Controller Dashboard ID:" + id);
    dashboardModel.captar(id)
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
    captardados,
}