var express = require("express");
var router = express.Router();
const ClienteController = require("../controllers/cliente_controller");

/* GET users listing. */
router.get("/", ClienteController.findAll);

// Get users by id
router.get("/:id", ClienteController.findByPk);
router.get("/name/:nombre", ClienteController.findOne);

module.exports = router;
