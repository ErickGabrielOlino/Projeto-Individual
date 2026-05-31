let express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.post("/enviardados", function (req, res){
    dashboardController.captardados(req,res);
    console.log("Rota Dashboard")
});

module.exports = router;