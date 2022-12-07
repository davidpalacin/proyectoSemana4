var express = require("express");
var router = express.Router();
const ClienteController = require("../controllers/cliente_controller");

/* GET users listing. */
router.get("/", ClienteController.findAll);

// Get users by id
router.get("/:id", ClienteController.findByPk);
// Get users por parámetros concretos
router.get("/name/:nombre", ClienteController.findByName);
router.get("/dni/:dni", ClienteController.findByDNI);
router.get("/phone/:phone", ClienteController.findByPhone);
router.get("/email/:email", ClienteController.findByEmail);
// Get users con un nombre parecido a :nombre
router.get("/name/like/:nombre", ClienteController.findByNameLike);

module.exports = router;
