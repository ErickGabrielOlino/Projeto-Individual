let express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res){
    usuarioController.cadastrar(req, res);
    console.log("Rota")
});

router.post("/login", function (req, res){
    usuarioController.logar(req, res);
    console.log("Rota")
});

module.exports = router;