var express = require("express");
var router = express.Router();
const ReservaController = require("../controllers/reserva_controller");

/* GET users listing. */
router.get("/", ReservaController.findAll);

// Get users by id
router.get("/:id", ReservaController.findByPk);
router.get("/entrydate/:entrydate", ReservaController.findByEntryDate);
router.get("/finaldate/:finaldate", ReservaController.findByFinalDate);

module.exports = router;
